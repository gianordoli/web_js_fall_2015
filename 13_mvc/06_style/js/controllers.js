// Same as we did so far!
// (name, dependencies)
// Don't forget to update the ng-app into the html file
var myApp = angular.module('myApp', []);


// Service: a piece of code that takes care of small tasks
myApp.controller('MyController', function MyController($scope, $http){
	$http.get('js/data.json')
		 .success(function(data){
		 	// Let's add a ranking...
		 	var newData = [];
		 	for(var i = 0; i < data.length; i++){
		 		var person = data[i];
		 		data[i]['ranking'] = i + 1;
		 		newData.push(data[i]);
		 	}
			$scope.richPeople = newData;
			$scope.peopleOrder = 'ranking';
		 });
});