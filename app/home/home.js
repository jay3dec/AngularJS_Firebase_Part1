'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful');
            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
  }
}]);
