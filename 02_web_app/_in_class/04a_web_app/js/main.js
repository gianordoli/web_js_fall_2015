/*------------------------------------------------*/
// Web App Intro
// -------------
// We'll work with scrapi.org, an API that grabs
// information from the MET Museum's website.
// Check out the documentation here:
// github.com/metmuseum-medialab/collections-api
/*------------------------------------------------*/

var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	var getInput = function(){
		// console.log($('#search-box').val());
		loadData($('#search-box').val());
	};

	// All our listeners
	var attachEvents = function(){
		console.log('Attaching events.');
		// Input box
		// document.getElementById('search-button').addEventListener('click', function(){});
		$('#search-button').on('click', getInput);
		$('#search-box').keypress(function(e){
			if (e.keyCode == 13){ // 13 is the ENTER
				getInput();
			}
		});
	};	

	// 2. Let's just try to load some data from the API
	var loadData = function(searchTerm){
		console.log('Searching for ' + searchTerm + '...');
		var searchUrl = 'http://scrapi.org/search/' + searchTerm;
		// Jquery's shortcutt for AJAX calls loading json files
		// 1. the address; 2. callback function
		// It will put the response inside the callback by default
		$.getJSON(searchUrl, function(json){
			console.log('Data received');
			console.log(json);
			var results = json.collection.items;
			console.log('Found '+results.length+' results.');
			appendData(results);
		});
	};

	// 3. Let's display this data
	var appendData = function(data){
		console.log('Appending data.');

		// Jquery animate! CSS params, speed
		// Turns out we really need this 'px' here... :(
		$('body').animate({
			scrollTop: $('#view').offset().top + 'px'
		}, 'slow');

		$('#view').empty(); // Jquery function!
		for(var i = 0; i < data.length; i++){
			// Is there a thumb?
			if(data[i].image_thumb !== 'http://metmuseum.org/content/img/placeholders/NoImageAvailable_180x180_frame.png'){
				$('#view').append('<img src="'+data[i].image_thumb+'" />');	
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