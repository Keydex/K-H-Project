var app = angular.module('HireMe', ['ngRoute', 'HireMeControllers', 'HireMeServices']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'partials/home.html',
		controller : 'homeController'
	})
	.when('/portfolio', {
		templateUrl : 'partials/portfolio.html',
		controller : 'portfolioController'
	})
        .when('/company', {
        	templateUrl : 'partials/company.html',
        	controller : 'companyController'
        })
	.otherwise({ // if url doesn't exist, go to /home
		redirectTo: '/home'
	});

});

