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
			location.hash = 'search-' + $('#search-box').val();
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
				location.hash = 'search-' + $('#search-box').val();
			}
		});

		// HEARTS
		$('.add-bt').off('mouseenter')
					.on('mouseenter', function(){
						$(this).children('.heart').css('visibility', 'visible');
					})
					.off('mouseleave')
					.on('mouseleave', function(){
						$(this).children('.heart').css('visibility', 'hidden');
					});	
			$('.heart').off('click')
						.on('click', function(){
							var id = $(this).attr('name');
							// I already have a localStorage
							if(localStorage['collection'] !== undefined){
								var savedItems = localStorage['collection'].split(',');
								// If the item is not already saved...
								if(savedItems.indexOf(id) < 0){
									// save the item
								}else{
									// the item has been saved to your collection
									createPopUp('Item saved to your collection.');
								}

							// Hey! This is a new localStorage
							}else{
								localStorage['collection'] = ;	
							}
						});
	};

	// A function where we detect the change of '#'
	// on the browser address field
    var hashRouter = function(){
		
		$(window).off('hashchange').on('hashchange', function() {
	    	
	    	var currentPage = location.hash.substring(1, location.hash.length);
	        console.log('Current hash is ' + currentPage);
	    	
	    	// Search page
	    	if(currentPage.indexOf('search') > -1){
	    		render('loading');
	    		var term = currentPage.substring(currentPage.indexOf('-') + 1,
	    										 currentPage.length);
	    		searchForTerm(term);
	    	
	    	// About
	    	}else if(currentPage === 'about'){
	    		render(currentPage);
	    	}

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
			// Filter out non-images
			var filteredResults = _.filter(results, function(element, index, list){
				return element.image_thumb !== 'http://metmuseum.org/content/img/placeholders/NoImageAvailable_180x180_frame.png';
			});
			console.log('Found ' + filteredResults.length + ' results.');
			render('search-results',
					{data: {
							results: filteredResults,
							term: searchTerm
						}
					});
		});
	};

	// 1. This is the file from last class.
	// We'll start by replacing the appendData function with render
	var render = function(viewId, data){
		console.log('Rendering template for ' + viewId);
		console.log('Received data:');
		console.log(data);

		var htmlTemplate = $('#tpl-'+viewId).html();
		var compiled = _.template(htmlTemplate);
		var compiledHtml = compiled(data);
		$('#view').html(compiledHtml);		

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