/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var socket;

	// Initializing socket and adding listener functions
	var socketSetup = function(callback){
		
		// Connect
	    socket = io.connect();

		// Listeners
		socket.on('', function(data){

		});

		// Call attachEvents
		callback();
	};

	var addBall = function(data){

	};

	var removeBall = function(data){

	};

	var moveBall = function(data){

	};

	var ballExists = function(id){

	};

	var attachEvents = function(){

	};	

	var init = function(){
		console.log('Initializing app.');

		socketSetup(attachEvents);	// Sending attachEvents as a callback	
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);