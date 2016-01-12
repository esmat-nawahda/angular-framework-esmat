'use strict';
//Declare app level module which depends on filters, and services


angular.module('servicesModule',[]);
var app= angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/addPost', {templateUrl: 'views/addPostView.html', controller: 'addPostCtrl'});
    //$routeProvider.when('/addJob', {templateUrl: 'views/addJobView.html', controller: 'addJobCtrl'});


   //$routeProvider.otherwise({redirectTo: '/newsfeed'});

}]);

