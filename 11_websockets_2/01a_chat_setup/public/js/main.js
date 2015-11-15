/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var socket;

	// connect to socket server
	var socketSetup = function(callback){
		console.log('Called socketStart.');
	    socket = io.connect();

	    // Listeners      
	}

	// Remember this one? Straight from our lesson #3
    var hashRouter = function(){
		$(window).off('hashchange').on('hashchange', function() {
	    	var currentPage = location.hash.substring(2, location.hash.length);
	        console.log('Current hash is ' + currentPage);
	        
	    });
	}

	// Any change to our hash will trigger this,
	// which will ask for some data from the server
	var loadData = function(template, data){
		console.log('Loading data for: ' + template);
	};

	// This is also from lesson #3, just adding some parameters:
	var render = function(template, containerElement, method, data){
		console.log(method + ' ' + template + ' in ' + containerElement);
		if(data !== undefined){
			console.log(data);
		}
		var templateToCompile = $('#tpl-' + template).html();
		var compiled =  _.template(templateToCompile);

        // We've just created some new elements,
        // so let's attach the events to them
        attachEvents();
	};

	var attachEvents = function(){
		console.log('Called attachEvents.');
      
	};

	var createRoom = function(){

	}	

	var sendMessage = function(){

	}

	var init = function(){
		
		console.log('Initializing app.');

	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);