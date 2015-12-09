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

	// 1. CREATE
	// A function to save new objects
	// (I made up this one! Not a Parse thing)
	var saveShow = function(parseClass, obj){
		// This is Parse syntax
		parseClass.save(obj, {
			success: function(res){
				console.log('Saved object.');
				console.log(res);
			},
			error: function(res, err){
				console.log(err);
			}
		});
	};

	// 2. READ
    var fetchAllShows = function(parseFetch){
		parseFetch.find({
			success: function(obj) {
				console.log(obj);
				obj.forEach(function(item){
					console.log(item.attributes.title);
				});
			},
			error: function(err) {
				console.log(err);
			}
		});
    };

    // 3. READ with conditions
    function fetchShow(property, value, parseFetch){
		parseFetch.greaterThanOrEqualTo(property, value)
					.find({
						success: function(obj) {
							console.log(obj);
							obj.forEach(function(item){
								// Each item is a Parse Object
								// Its data is inside 'attributes'
								// We can read it like a regular object...
								// console.log(item.attributes.title);

								// ...or use Parse functions
								console.log(item.get('title'));
							});
						},
						error: function(err) {
							console.log(err);
						}
					});
	};

	// 4. UPDATE
	var updateShow = function(objTitle, parseClass, parseFetch){

		// First let's fetch with condition
		parseFetch.equalTo('title', objTitle)
					.find({
						success: function(obj) {
							// This will give us back an Array!
							// We know that there's only one 'Sopranos' there, so...
							console.log(obj[0]);

							// Once we have the object, let's set a new attr
							// and save it back
							obj[0].set('number_of_seasons', 6);
							// obj[0].set('new_column', new Date());
							obj[0].save();
						},
						error: function(err) {
							console.log(err);
						}
					});
	}

	// 5. DELETE
	var deleteShow = function(objTitle, parseClass, parseFetch){

		// First let's fetch with condition
		parseFetch.equalTo('title', objTitle)
					.find({
						success: function(obj) {
							// This will give us back an Array!
							// We know that there's only one 'Sopranos' there, so...
							console.log(obj[0]);

							obj[0].destroy();
						},
						error: function(err) {
							console.log(err);
						}
					});
	}	

	var init = function(){

		initParse();

		// // 5. DELETE
		// deleteShow('Sopranos', tvShows, showQuery);

		// 4. UPDATE
		// updateShow('Sopranos', tvShows, showQuery);

		// 3. READ with condition
    	// fetchShow('number_of_seasons', 4, showQuery);

		// 2. READ
		// fetchAllShows(showQuery);

		// 1. CREATE
		// saveShow(tvShows, {
		// 	title: 'Sopranos',
		// 	channel: 'HBO',
		// 	genre: ['Drama', 'Mafia'],
		// 	year: 2000,
		// 	number_of_seasons: 7
		// });

		// saveShow(tvShows, {
		// 	title: 'Mad Men',
		// 	channel: 'AMC',
		// 	genre: ['Drama', 'History'],
		// 	year: 2008,
		// 	number_of_seasons: 7
		// });

		// saveShow(tvShows, {
		// 	title: 'Breaking Bad',
		// 	channel: 'AMC',
		// 	genre: ['Action', 'History'],
		// 	year: 2009,
		// 	number_of_seasons: 6
		// });		
		
		// saveShow(tvShows, {
		// 	title: 'Black Mirror',
		// 	channel: 'Netflix',
		// 	genre: ['Sci-fi', 'Drama', 'Critical Design'],
		// 	year: 2012,
		// 	number_of_seasons: 2
		// });
	}

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);