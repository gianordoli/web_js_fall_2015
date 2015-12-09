/* Your code starts here */

var app = app || {};

app.main = (function() {

	// Declaring our app variables
	var nameOfTheClass,	// String
		tvShowsClass,	// Parse Class Object
		tvShows;		// Instance of tvShowsClass
	
	var showQuery;		// Parse Fetch Object

	function initParse(){
	    Parse.initialize("DIRiJuDfvVZ9y2uXhUrCKpSPlNthjpfifXGgb6Am",	// App ID
	    				 "hnNNUvneDBzyZf4w9sflSywp1Pfvfy2IuT4d1u7C");	// JS Key
		nameOfTheClass = 'TV';
		// 1. CREATE
		tvShowsClass = Parse.Object.extend(nameOfTheClass);	// Parse Class Object
		tvShows = new tvShowsClass();						// Instance of

		// 2. READ
		showQuery = new Parse.Query(nameOfTheClass);
	}

	// 1. CREATE
	// A function to save new objects
	// (I made up this one! Not a Parse thing)
	var saveShow = function(parseClass, obj){
		// All the lines below are default Parse functions/syntax
		parseClass.save(obj, {
			success: function(res){
				console.log('Yay! Just saved a new object!');
			},
			error: function(res, err){
				console.log(err);
			}
		});
	};

	// 2. READ
    var fetchAllShows = function(parseFetch){
    	parseFetch.find({
    		success: function(obj){
    			console.log(obj);
    		},
    		error: function(err){
    			console.log(err);
    		}
    	});
    };

    // 3. READ with conditions
    function fetchShow(property, value, parseFetch){
    	parseFetch.greaterThanOrEqualTo(property, value).find({
    		success: function(obj){
    			console.log(obj);
    			obj.forEach(function(item){
    				// The structure of the object is...
    				// console.log(item.attributes.title);

    				//I can also call the Parse function .get(attr)
    				console.log(item.get('title'));
    			});
    		},
    		error: function(err){
    			console.log(err);
    		}
    	});
	};

	var fetchShow = function(property, value, parseFetch, callback){
		parseFetch.equalTo(property, value).find({
			success: function(obj){
				console.log(obj);
				callback(obj[0]);	// What should I do from here?
			},
			error: function(err){
				console.log(err);
			}
		});
	};

	// 4. UPDATE
	var updateShow = function(obj, property, value){
		obj.set(property, value);
		// obj.set('new_column', '');
		obj.save(null, {
			success: function(res){
				console.log('Yay! Just updated an object!');
			},
			error: function(res, err){
				console.log(err);
			}
		});
	}

	// 5. DELETE
	var deleteShow = function(obj){
		obj.destroy();
	}	

	var init = function(){

		initParse();

		fetchShow('title', 'The Sopranos', showQuery, function(obj){
			updateShow(obj, 'title', 'Sopranos');
		});
		// fetchShow('title', 'Sopranos', showQuery, function(obj){
		// 	deleteShow(obj);
		// });

		// saveShow(tvShows, {
		// 	title: 'Dexter',
		// 	channel: 'ABC',
		// 	genre: ['Thriller', 'Horror']
		// });
		// saveShow(tvShows, {
		// 	title: 'The Sopranos',
		// 	channel: 'HBO',
		// 	genre: ['Drama']
		// });
		// saveShow(tvShows, {
		// 	title: 'Mad Men',
		// 	channel: 'AMC',
		// 	genre: ['Drama'],
		// 	number_of_seasons: 7
		// });
		// saveShow(tvShows, {
		// 	title: 'Game of Thrones',
		// 	channel: 'HBO',
		// 	genre: ['Drama', 'Medieval'],
		// 	number_of_seasons: 5
		// });		

		// fetchAllShows(showQuery);

		// fetchShow('number_of_seasons', 5, showQuery);

		// updateShow('Mad Men', tvShows, showQuery);

		// deleteShow('Game of Thrones', tvShows, showQuery);
	}

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);