var app = angular.module("App", ['ngRoute','ngAnimate']);


app
.config(['$routeProvider',
	function($routeProvider) {
	    $routeProvider.
	     when('/home', {
	        templateUrl: 'views/home/home.html',
	        controller: 'HomeController'
	      }).
	      when('/view2', {
	        templateUrl: 'views/view2/view2.html',
	        controller: 'View2Controller'
	      }).
	      otherwise({
	        redirectTo: '/home'
	      });
	  }
	])


