/*---------- BASIC SETUP ----------*/
var express		= require('express'),
	bodyParser	= require('body-parser');	// helper for parsing HTTP requests
var app = express();						// our Express app
var PORT = 4000;

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


// -----> Socket.io setup
var server = require('http').Server(app);
var io = require('socket.io')(server);

// !!!!!! Hey, we just changed this !!!!!!
server.listen(PORT, function(){
    console.log('Express server is running at ' + PORT);
});


/*-------------- APP --------------*/

// Everything will be inside the on() function
// .on() listens to any string you create ('gabriel-entered', 'shakti-arrived',...)
// or two predefined events: 'connection' and 'disconnect'
io.on('connection', function(socket) {
    /*––––––––––– SOCKET.IO starts here –––––––––––––––*/

    // .on(identifier, callback(data))      listens to 
    // .emit(identifier, data)              sends data to every user
    // .broadcast.emit(identifier, data)    sends data to every user,
    //                                      except the newly created
    
    /*---------- THIS ALL HAPPENS ON EVERY NEW CONNECTION ----------*/
    console.log('A new user has connected: ' + socket.id);

    // I'm using 'welcome,' but it could be ANY STRING!
    // The important thing is to use the same one on the client side
    socket.emit('welcome', 'Welcome! your id is ' + socket.id);  // sending back a simple string

    // The code above sent a message to the newly created connection only! (socket)
    // If we want to send data to every user, we need io.sockets.emmit
    io.sockets.emit('hey-everybody', 'hey, everybody! Please welcome ' + socket.id);
    /*--------------------------------------------------------------*/


    /*----- THESE ARE LISTENERS! CALLED WHEN A MSG IS RECEIVED -----*/
    // A listener for socket disconnection
    socket.on('disconnect', function() {
        io.sockets.emit('bye', 'See you, ' + socket.id + '!');
    });    

    socket.on('msg-to-server', function(data) {
        io.sockets.emit('msg-to-clients', {
            id: socket.id,
            msg: data
        });
    });
    /*--------------------------------------------------------------*/
});