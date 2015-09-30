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


	}

	// 1. CREATE
	// A function to save new objects
	// (I made up this one! Not a Parse thing)
	var saveShow = function(parseClass, obj){

	};

	// 2. READ
    var fetchAllShows = function(parseFetch){

    };

    // 3. READ with conditions
    function fetchShow(property, value, parseFetch){

	};

	// 4. UPDATE
	var updateShow = function(objTitle, parseClass, parseFetch){

	}

	// 5. DELETE
	var deleteShow = function(objTitle, parseClass, parseFetch){

	}	

	var init = function(){

		initParse();

	}

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);