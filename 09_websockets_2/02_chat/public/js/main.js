/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var socket;

	// connect to socket server
	var socketStart = function(callback){
		console.log('Called socketStart.');
	    socket = io.connect();
	    callback();
	}

	var attachEvents = function(){
		console.log('Called attachEvents.');
	}

	var init = function(){
		console.log('Initializing app.');
		socketStart(attachEvents);	// Sending attachEvents as a callback 

	    socket.on('welcome', function(data) {	// listen for global server message
	      $('#server-message').html(data);
	    });
	    name = prompt("Please enter your name", "Harry Potter");
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);