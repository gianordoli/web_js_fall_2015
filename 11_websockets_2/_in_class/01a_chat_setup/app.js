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

server.listen(PORT, function(){
    console.log('Express server is running at ' + PORT);
});

var rooms = {};

/*-------------- APP --------------*/
io.on('connection', function(socket) {
    /*––––––––––– SOCKET.IO starts here –––––––––––––––*/

    console.log('A new user has connected: ' + socket.id);

    // Listeners
    // When the user enters the lobby...
    socket.on('lobby', function(){
        // Make sure we leave all rooms when we enter the lobby
        leaveAllRooms(socket);

        // ...we send back a list of available chatrooms
        socket.emit('room-list', {
            rooms: rooms
        });
    });

    socket.on('create-room', function(roomName){

        // Create a random id of letters and numbers with 7 characters
        var id = createId(7);
        rooms[id] = {       // Add to the list of rooms
            name: roomName, // The name sent by the user
            members: 0      // Number of memebers in THIS room
        };
        console.log('New room id: ' + id + ', name: ' + rooms[id].name);

        // Send it back to the users
        socket.emit('room-list', {
            rooms: rooms
        });
    });

    socket.on('room', function(roomId){
        console.log('User has joined room ' + roomId);
        //--------------->>>>>>> NEW <<<<<<<<-------------------
        socket.join(roomId);
        //--------------->>>>>>> NEW <<<<<<<<-------------------
        rooms[roomId].members ++;   // Updating the rooms object
        socket.emit('joined-room', {
            room: rooms[roomId]
        });
    });

    socket.on('msg-to-server', function(msg){
        // socket.rooms[0] is a private room for each user created by socket.io
        // when he joins the connection
        var roomId = socket.rooms[1];   // This is the one we want!

        //--------------->>>>>>> NEW <<<<<<<<-------------------
        // Send message to a specific room
        io.to(roomId).emit('msg-to-clients', {
            msg: msg
        });
        //--------------->>>>>>> NEW <<<<<<<<-------------------
    });

    // Disconnecting
    socket.on('disconnect', function() {
        leaveAllRooms(socket);
        io.sockets.emit('bye', 'See you, ' + socket.id + '!');
    });
});

function leaveAllRooms(socket){
    console.log('Called leaveAllRooms');
    console.log(socket.rooms);
    for(var i = 1; i < socket.rooms.length; i++){
        var roomId = socket.rooms[i];
        //--------------->>>>>>> NEW <<<<<<<<-------------------
        // Disconnecting from a room!
        socket.leave(roomId);
        //--------------->>>>>>> NEW <<<<<<<<-------------------
        rooms[roomId].members --;
        console.log('Leaving ' + roomId + '. Members: ' + rooms[roomId].members);
    }
}

// https://gist.github.com/gordonbrander/2230317
function createId(n) {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 7 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, n);
}
