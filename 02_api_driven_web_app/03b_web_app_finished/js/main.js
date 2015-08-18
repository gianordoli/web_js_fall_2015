/*------------------------------------------------*/
// Web App Intro
// -------------
// We'll work with scrapi.org, an API that grabs
// information from the MET Museum's website.
// Check out the documentation here:
// github.com/metmuseum-medialab/collections-api
/*------------------------------------------------*/

var app = app || {};
// No, wait! That's a bit different than what we've done before!
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});

app.main = (function(){

	console.log('Loading app.');

	// 1. We'll put all our event listeners here,
	// that is, all code related to some interactive element on the page
	var attachEvents = function(){

		console.log('Attaching events.');

		/*
		// This is the vanilla JS way of doing things:
		document.getElementById('search-button').addEventListener("click", function(){
			console.log(document.getElementById('search-box').value);
		});

		// This is the JQuery equivalent.
		// Besides being shorter, we can use CSS selectors
		// instead of learning a different syntax
		// See more at: http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
		$('#search-button').on('click', function(){
			console.log($('#search-box').val());
		});
		*/

		// It's recommended to REMOVE the events before adding. Why?
		// We might call this function again as we create new elements.
		// When we do so, we don't want to duplicate events in existing objects.
		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
				loadData($('#search-box').val());
			}
		});		
	};

	// 2. Let's just try to load some data from the API
	var loadData = function(searchTerm){
		
		console.log('Searching for ' + searchTerm + '...');
		var searchUrl = 'http://scrapi.org/search/' + searchTerm;

		// This is an AJAX function that JQuery is helping us with/
		// It takes 2 parameters:
		// * the url to call
		// * the callback function (more on that later!)
		// for now, just think about it as "what happens after?"
		$.getJSON(searchUrl, function(json){
			// console.log('Data received.');
			// console.log(json);

			// Take a look into the data structure.
			// The results are encapsulated into collection > items
			var results = json.collection.items;
			console.log('Found ' + results.length + ' results.');

			appendData(results);
		});
	};

	// 3. Let's display this data
	var appendData = function(data){
		console.log('Appending data.');
		console.log(data);

		// 5. What happens if we search for something again?
		// Let's clean up the results so we don't mess things up
		$('#view').empty();

		// 6. BONUS! Let's scroll
		$('html, body').animate({
            scrollTop: $('#view').offset().top + 'px'
        }, 'slow');

		// 3.
		for(var i = 0; i < data.length; i++){
			// 4. Check if there's a thumb first
			if(data[i].image_thumb !== 'http://metmuseum.org/content/img/placeholders/NoImageAvailable_180x180_frame.png'){
				// 3. 
				$('#view').append('<img src="' + data[i].image_thumb + '" class="gallery-item"/>');
			}
		}
	};

	// 1.
	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);