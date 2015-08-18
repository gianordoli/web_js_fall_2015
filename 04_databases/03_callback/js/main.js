/* Your code starts here */

var app = app || {};

app.main = (function() {

	// Declaring our app variables
	var nameOfTheClass,	// String
		tvShowsClass,	// Parse Class Object
		tvShows;		// Instance of tvShowsClass
	
	var showQuery;		// Parse Fetch Object

	function initParse(){
	    Parse.initialize("DIRiJuDfvVZ9y2uXhUrCKpSPlNthjpfifXGgb6Am",
	    				 "hnNNUvneDBzyZf4w9sflSywp1Pfvfy2IuT4d1u7C");		
		nameOfTheClass = 'TV';

		// 1. CREATE
		// There's no Class 'TV' yet;
		// Parse will create it as soon as we save a new Object
		tvShowsClass = Parse.Object.extend(nameOfTheClass);
		tvShows = new tvShowsClass();

		// 2. READ
	    // For fetching, you'll need to create a Fetch instance
	    showQuery = new Parse.Query(nameOfTheClass);
	}

    /*--------------------------------------------------*/
    // BONUS: CALLBACK!!!
    /*--------------------------------------------------*/
    // We have some redundant code in the previous example:
    // updateShow and destroyShow perform a fetch before
    // actually updating and deleting the objects.
    // Why not use fetchShow() and just ask it to do
    // something different once the object is fetched?

    // READ
    function fetchShow(property, value, parseFetch, callback){
		
		parseFetch.greaterThanOrEqualTo(property, value)
					.find({
						success: function(obj) {

							// Again, we're assuming that our query
							// is fetching a single object
							if(callback === undefined){
								console.log('I\'m just fetching ' + obj[0].get('title'));	
							}else{
								callback(obj[0]);
							}
						},
						error: function(err) {
							console.log(err);
						}
					});
	};

	// UPDATE
	var updateShow = function(obj, property, value){
		obj.set(property, value);
		obj.save();
	}

	// DELETE
	var deleteShow = function(obj){
		obj.destroy();
	}	

	var init = function(){

		initParse();

		// 6. callback()
		// fetchShow(	'title', 'Sopranos', showQuery,
		// 			// callback is an anonymous function that is waiting for an object
		// 			function (obj){
		// 				updateShow(obj, 'number_of_seasons', 4);
		// 			});

		// fetchShow(	'title', 'Sopranos', showQuery,
		// 			// callback is an anonymous function that is waiting for an object
		// 			function (obj){
		// 				deleteShow(obj);
		// 			});
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);