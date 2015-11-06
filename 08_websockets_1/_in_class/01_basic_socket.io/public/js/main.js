/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	// "Global"
	var socket;

	// Initializing the socket and adding listener functions
	var socketSetup = function(){
		socket = io.connect();

		// socket.on is a LISTENER

		// Key-value pair:
		// 1 - The EXACT SAME String identifier as in the server
		// 2 - A callback function with the object that the server just sent
		socket.on('welcome', function(data){
			console.log(data);
		});

		socket.on('hey-everybody', function(data){
			console.log(data);
			$('body').append('<h3>' + data + '</h3>');
		});

		socket.on('msg-to-clients', function(data){
			console.log(data);
			$('body').append('<p>' + data.id + ' says: ' + data.msg + '</p>');
		});		
	};

	var attachEvents = function(){
		$('#msg-box').keypress(function(e){
			if(e.keyCode == 13){
				socket.emit('msg-to-server', $('#msg-box').val());
			}
		});
	};

	var init = function(){
		console.log('Initializing app.');
		socketSetup();
		attachEvents();
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);