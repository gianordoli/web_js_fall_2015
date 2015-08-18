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

	var attachEvents = function(){

		console.log('Attaching events.');

	};

	// 2. Let's just try to load some data from the API
	var loadData = function(searchTerm){
		
		console.log('Searching for ' + searchTerm + '...');

	};

	// 3. Let's display this data
	var appendData = function(data){

		console.log('Appending data.');

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