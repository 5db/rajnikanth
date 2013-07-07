'use strict';

angular.module('rajnikanthApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	    .when('/search', {
		    templateUrl: 'views/search.html',
		    controller: 'SearchCtrl'
	    })
      .otherwise({
        redirectTo: '/'
      });
  });
