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
		socket.on('welcome', function(data){
			console.log(data);
		});

		socket.on('add-ball', function(data){
			addBall(data);
		});
		
		socket.on('remove-ball', function(data){
			if(ballExists(data.id)){
				removeBall(data);
			}
		});

		// Listen again, this time to render
		socket.on('render', function(data){
			// console.log(data);
			// If a ball with this ID hasn't been rendered yet, let's add it
			if(!ballExists(data.id)){
				addBall(data);
			}
			moveBall(data);
		});			

		// Call attachEvents
		callback();
	};

	var addBall = function(data){
		var ball = $('<div class="ball" id="' + data.id + '"></div>')
				 	.css('background-color', data.color);
		$('body').append(ball);
	};

	var removeBall = function(data){
		$('#' + data.id).remove();
	};

	var moveBall = function(data){
		$('#' + data.id).css({
			'top': data.top,
			'left': data.left
		});
	};

	var ballExists = function(id){
		// Wait, does this ball exist?
		if($('#' + id).length == 0){
			return false
		}else{
			return true;
		}
	};

	var attachEvents = function(){
		$(document).keydown(function(e) {
			console.log(e.keyCode);
			socket.emit('move', e.keyCode);
		});
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