/*------------------------------------------------*/
// Single-Page Application
// -----------------------
// Let's keep working on our art gallery and add some
// more functionality to it.
// This lesson will also serve as an introduction
// to the MODEL-VIEW-CONTROLLER pattern
/*------------------------------------------------*/

var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	var attachEvents = function(){

		console.log('Attaching events.');

		$('#search-button').off('click').on('click', function(){
			
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
			
			}
		});


	};

	// A function where we detect the change of '#'
	// on the browser address field
    var hashRouter = function(){
		
		$(window).off('hashchange').on('hashchange', function() {
	    	
	    	var currentPage = location.hash.substring(1, location.hash.length);
	        console.log('Current hash is ' + currentPage);
	        
	        
	    });
    };

	var saveToCollection = function(obj){

	}

	var updateNumberOfItems = function(){

	}

	var createPopUp = function(message){
		var popUp = $('<div class="pop-up">' + message + '</div>');
		$(popUp).appendTo('body')
				.animate({
		            top: ($(window).height() / 2) + 'px'
		        },
		        300,
		        function(){
			        setTimeout(function(){
			        	console.log('finished');
			        	$(popUp).animate({
			        		top: '100%'	
			        	}, 300, function(){
			        		$(popUp).remove();
			        	});
			        }, 2000);
		        });
	};

    var loadCollectionInfo = function(objects){
    	
    };

	var searchForCRDID = function(CRDID, objects){
		
	};


	var searchForTerm = function(searchTerm){
		
		console.log('Searching for ' + searchTerm + '...');
		var searchUrl = 'http://scrapi.org/search/' + searchTerm;

		$.getJSON(searchUrl, function(json){
			console.log('Data received.');
			console.log(json);

			var results = json.collection.items;
			console.log('Found ' + results.length + ' results.');


		});
	};

	// 1. This is the file from last class.
	// We'll start by replacing the appendData function with render
	var render = function(viewName, data){
		console.log('Rendering template for ' + viewName);
		console.log('Received data:');
		console.log(data);

        // We've just created some new elements,
        // so let's attach the events to them
        attachEvents();
	};	

	var init = function(){
		console.log('Initializing app.');
		attachEvents();
		hashRouter();
		updateNumberOfItems();
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);