var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){
  $http.get('js/data.json')
        .success(function(data){
        	for(var i = 0; i < data.length; i++){
        		data[i]['ranking'] = i + 1;
        	}
          	$scope.richPeople = data;
          	$scope.peopleOrder = 'ranking';
        });
});

