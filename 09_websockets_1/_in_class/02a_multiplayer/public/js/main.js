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
			console.log(data.msg);
			console.log(data);
			// Check if the object is not empty first
			if(Object.keys(data.users).length > 0){
				for(var id in data.users){
					addBall({
						id: id,
						color: data.users[id]['color'],
						top: data.users[id]['top'],
						left: data.users[id]['left']
					});
				}
			}
		});

		socket.on('add-ball', function(data){
			console.log(data);
			addBall(data);
		});

		socket.on('render', function(data){
			console.log(data);
			if(!ballExists(data.id)){
				addBall(data);
			}
			moveBall(data);
		});		

		socket.on('remove-ball', function(data){
			console.log(data);
			if(ballExists(data)){
				removeBall(data);	
			}
		});				

		// Call attachEvents
		callback();
	};

	var addBall = function(data){
		console.log('Called add ball');
		var ball = $('<div class="ball" id="'+data.id+'"></div>')
					.css({
						'background-color': data.color,
						'top': data.top,
						'left': data.left
					})
					.appendTo('body');
	};

	var removeBall = function(id){
		console.log('Called removeBall');
		$('#'+id).remove();
	};

	var moveBall = function(data){
		console.log('Called moveBall');
		$('#'+data.id).css({
			'top': data.top,
			'left': data.left
		});
	};

	var ballExists = function(id){
		if($('#'+id).length == 0){
			return false;
		}else{
			return true;
		}
	};

	var attachEvents = function(){
		$(document).keydown(function(e){
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