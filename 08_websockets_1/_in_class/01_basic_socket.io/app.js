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

/*------- SOCKET.IO SETUP */
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(PORT, function(){
    console.log('Express server is running at ' + PORT);
});

// app.listen(PORT, function(){
//     console.log('Express server is running at ' + PORT);
// });

/*-------------- APP --------------*/
// EVERYTHING happens inside of here 
io.on('connection', function(socket){
    console.log('A new client has connected');
    console.log(socket.id);

    // key-value pair:
    // 1 - A String that identifies the message
    // 2 - Message (data)
    // Socket refers to ONE user
    socket.emit('welcome', 'Welcome! Your id is ' + socket.id);

    // io.sockets refers to ALL users connected
    io.sockets.emit('hey-everybody', 'Hey everybody! Please welcome ' + socket.id);

    // LISTENERS
    socket.on('msg-to-server', function(data){
        console.log(data);
        io.sockets.emit('msg-to-clients', {
            id: socket.id,
            msg: data
        });
    });

    socket.on('disconnect', function(data){
        io.sockets.emit('msg-to-clients', {
            id: socket.id,
            msg: 'Has just disconnected.'
        });
    });

});











