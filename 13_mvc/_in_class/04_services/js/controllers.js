var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){
  $http.get('js/data.json')
        .success(function(data){
          $scope.richPeople = data;
        });
});

