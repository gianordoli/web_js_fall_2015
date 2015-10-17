/*---------- BASIC SETUP ----------*/
var express		= require('express'),
	bodyParser	= require('body-parser');	// helper for parsing HTTP requests
var app = express();						// our Express app
var PORT = 4000;
var server = require('http').Server(app);   // Socket.io setup
var io = require('socket.io')(server);

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());							// parse application/json

// Express server
app.use(function(req, res, next) {
    // Setup a Cross Origin Resource sharing
    // See CORS at https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('incoming request from ---> ' + ip);
    var url = req.originalUrl;
    console.log('### requesting ---> ' + url);	// Show the URL user just hit by user
    next();
});

app.use('/', express.static(__dirname + '/public'));

// !!!!!! Hey, we just changed this !!!!!!
server.listen(PORT, function(){
    console.log('Express server is running at ' + PORT);
});


/*-------------- APP --------------*/
var users = {}
// our structure will be
// users = { id: {
//             color: hsl() string,
//             top: integer,
//             left: integer

//             },
//             ...
//         };

// Everything will be inside the on() function
// .on() listens to any string you create ('gabriel-entered', 'shakti-arrived',...)
// or two predefined events: 'connection' and 'disconnect'
io.on('connection', function(socket) {
    /*––––––––––– SOCKET.IO starts here –––––––––––––––*/

    // .on()                listens to 
    // .emit()              sends data to every user
    // .broadcast.emit()    sends data to every user, except the newly created
    
    /*---------- THIS ALL HAPPENS ON EVERY NEW CONNECTION ----------*/
    console.log('A new user has connected: ' + socket.id);

    // I'm using 'welcome,' but it could be ANY STRING!
    // The important thing is to use the same one on the client side
    socket.emit('welcome', {
        msg: 'Welcome! your id is ' + socket.id,
        users: users
    });
    // Let's send a greeting message
    // + all users currently registered

    // The code above sent a message to the newly created connection only! (socket)
    // If we want to send data to every user, we need io.sockets.emmit
    addUser(socket.id);
    io.sockets.emit('add-ball',{
        id: socket.id,
        color: users[socket.id]['color'],
        top: users[socket.id]['top'],
        left: users[socket.id]['left']
    }); // I'm sending an object!

    /*--------------------------------------------------------------*/


    /*----- THESE ARE LISTENERS! CALLED WHEN A MSG IS RECEIVED -----*/
    // A listener for socket disconnection
    socket.on('disconnect', function() {
        console.log(socket.id + ' just disconnected');
        removeUser(socket.id);  // Remove object from our server array of users
        io.sockets.emit('remove-ball', { id: socket.id });  // Ask clients to remove the div
    });

    // listen to 'move' -> update user position -> emit call to render
    socket.on('move', function(data) {
        console.log(socket.id + ' has sent: ' + data);  // got a number
        // console.log(typeof data);

        updateUser(socket.id, data);   // Update position

        io.sockets.emit('render', { // Update position on client
            id: socket.id,
            color: users[socket.id]['color'],
            top: users[socket.id]['top'],
            left: users[socket.id]['left']
        });
    });
    /*--------------------------------------------------------------*/
});

function updateUser(id, data){
    switch(data) {
        case 37: // left
            users[id]['left'] -= 10;
        break;

        case 39: // right
            users[id]['left'] += 10;
        break;

        case 38: // up
            users[id]['top'] -= 10;
        break;

        case 40: // down
            users[id]['top'] += 10;
        break;

        default: return; // exit
    }
}

function addUser(id) {
    if(!users.hasOwnProperty(id)) {
        users[id] = {
            color: 'hsla(' + Math.round(Math.random()*360) + ', 100%, 50%, 0.75)',
            top: 0,
            left: 0   
        }
    }
    console.log('current users: ' + Object.keys(users).length);
}

function removeUser(id) {
    if(users.hasOwnProperty(id)) {
        delete users[id]
    }
    console.log('current users: ' + Object.keys(users).length);
}