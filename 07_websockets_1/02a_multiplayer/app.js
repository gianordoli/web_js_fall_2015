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
var users = {}
// our structure will be
// users = { id: {
//             color: hsl() string,
//             top: integer,
//             left: integer

//             },
//             ...
//         };

io.on('connection', function(socket) {
    /*––––––––––– SOCKET.IO starts here –––––––––––––––*/

    // .on()                listens to 
    // .emit()              sends data to every user
    // .broadcast.emit()    sends data to every user, except the newly created
    
    /*---------- THIS ALL HAPPENS ON EVERY NEW CONNECTION ----------*/
    console.log('A new user has connected: ' + socket.id);

    socket.emit('welcome', 'Welcome! your id is ' + socket.id);  // sending back a simple string


    /*--------------------------------------------------------------*/


    /*----- THESE ARE LISTENERS! CALLED WHEN A MSG IS RECEIVED -----*/
    socket.on('disconnect', function() {
        console.log(socket.id + ' just disconnected');

    });    

    socket.on('', function(data) {

    });
    /*--------------------------------------------------------------*/
});

function updateUser(id, data){

}

function addUser(id) {

}

function removeUser(id) {

}



