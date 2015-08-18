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

		// 4. show/hide hearts
		$('.add-bt').off('mouseenter')
					.on('mouseenter', function() {
						$(this).children('.heart').css('visibility', 'visible');
					})
					.off('mouseleave')
					.on('mouseleave', function() {
						$(this).children('.heart').css('visibility', 'hidden');
					});				

		// 5. Add to gallery
		$('.heart').off('click')
					.on('click', function(){

						// Does the user already have a collection?

						// A) Yes. Let's split it into an array and add one more item
						if(localStorage['collection'] !== undefined){

							console.log('Adding new item to collection.');
							var savedItems = localStorage['collection'].split(',');

							// Save only if the item is not yet in the collection
							if(savedItems.indexOf($(this).attr('name')) < 0){
								console.log('Adding item #' + $(this).attr('name') + ' to collection.');
								savedItems.push($(this).attr('name'));
								saveToCollection(savedItems);
							}else{
								createPopUp('This item has already been saved to your collection.');
							}

						// No. Just add this item
						}else{
							console.log('Creating new collection.');
							console.log('Adding item #' + $(this).attr('name') + ' to collection.');							
							saveToCollection($(this).attr('name'));
						}					
					});

		// 6. show/hide close
		$('.remove-bt').off('mouseenter')
					.on('mouseenter', function() {
						$(this).children('.close').css('visibility', 'visible');
					})
					.off('mouseleave')
					.on('mouseleave', function() {
						$(this).children('.close').css('visibility', 'hidden');
					});	

		$('.close').off('click')
					.on('click', function(){

						createPopUp('Item removed from your collection.');

						var itemToRemove = $(this).attr('name');
						var savedItems = localStorage['collection'].split(',');
						var index = savedItems.indexOf(itemToRemove);
						savedItems.splice(index, 1);
						if(savedItems.length == 0){
							localStorage.clear();
						}else{
							localStorage['collection'] = savedItems;	
						}
						$(this).parent().parent().remove();
					});	
	};

	// A function where we detect the change of '#'
	// on the browser address field
    var hashRouter = function(){
		
		$(window).off('hashchange').on('hashchange', function() {
	    	
	    	var currentPage = location.hash.substring(1, location.hash.length);
	        console.log('Current hash is ' + currentPage);
	        
	        if(currentPage.indexOf('search') > -1){
	        	render('loading');
	        	var term = currentPage.substring(currentPage.indexOf('-') + 1,
	        									 currentPage.length);
	        	searchForTerm(term);
	        
	        }else if(currentPage === 'my-gallery'){
	        	render('loading');
	        	$('#search-box').val('');
	        	loadCollectionInfo();

	        }else if(currentPage === 'about'){
	        	render(currentPage);
	        }	        
	    });
    };

	var saveToCollection = function(obj){
		localStorage['collection'] = obj;
		createPopUp('Item saved to your collection.');
		updateNumberOfItems(obj);
	}

	var updateNumberOfItems = function(){
		if(localStorage['collection'] !== undefined){
			var savedItems = localStorage['collection'].split(',');
			$('#n-items').html(savedItems.length);
		}else{
			$('#n-items').html('0');
		}
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
    	
    	var savedItems = localStorage['collection'].split(',');

    	// Is it the first time we're calling this function or
    	// we haven't loaded as much objects as we needed?
    	if(objects === undefined){
    		console.log('Loading 1st object');
    		objects = [];
    		searchForCRDID(savedItems[0], objects);

    	}else if(objects.length < savedItems.length){
    		console.log('Loading object ' + (objects.length + 1)  + ' of ' + savedItems.length);
    		searchForCRDID(savedItems[objects.length], objects);

    	}else{
    		// Display
        	render('my-gallery',
        			{ data: {
        		   		results: objects
					}
        	});
    	}
    };

	var searchForCRDID = function(CRDID, objects){
		
		console.log('Requesting info for object #' + CRDID);
		var searchUrl = 'http://scrapi.org/object/' + CRDID;

		$.getJSON(searchUrl, function(json){
			console.log('Data received.');
			// console.log(json);
			objects.push(json);
			console.log(objects.length);
			loadCollectionInfo(objects);
		});
	};


	var searchForTerm = function(searchTerm){
		
		console.log('Searching for ' + searchTerm + '...');
		var searchUrl = 'http://scrapi.org/search/' + searchTerm;

		$.getJSON(searchUrl, function(json){
			console.log('Data received.');
			console.log(json);

			var results = json.collection.items;
			console.log('Found ' + results.length + ' results.');

			// 0. First of all, let's have as less logics as possible in the view
			// So, we should filter out the images without thumb before displaying them
			var filteredResults = _.filter(results, function(element, index, list){
				return element.image_thumb !== 'http://metmuseum.org/content/img/placeholders/NoImageAvailable_180x180_frame.png';
			});
			console.log('Results with thumb: ' + filteredResults.length);

			// viewName, parentContainer, data
			render('search-results',
					{ data: {
						results: filteredResults,
						term: searchTerm
					}
				});
		});
	};

	// 1. This is the file from last class.
	// We'll start by replacing the appendData function with render
	var render = function(viewName, data){
		console.log('Rendering template for ' + viewName);
		console.log('Received data:');
		console.log(data);

		// Load the template from the html file
		var templateToCompile = $('#tpl-' + viewName).html();

		// Attach the template to the underscore function
		var compiled =  _.template(templateToCompile);

		// Send the data and display the result
		$('#view').html(compiled(data));
		$('#container').animate({
            top: '60px'
        }, 'slow');

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