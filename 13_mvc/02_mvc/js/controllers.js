// Same as we did so far!
// (name, dependencies)
// Don't forget to update the ng-app into the html file
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	// This is our model so far: a simple JS object
	$scope.hit = {
		"author": "Justin Bieber",
		"name"	: "Where are ü now"
	};
});