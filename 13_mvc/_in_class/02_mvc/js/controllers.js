var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.hit = {
		'author': 'Justin Bieber',
		'name'	: 'Where are ü now'
	};
});

