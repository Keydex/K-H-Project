var app = angular.module('HireMe', ['ngRoute', 'ngMaterial', 'ngMessages', 'HireMeControllers']);

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
    .when('/portfolio/:location', {
        templateUrl : 'partials/location.html',
        controller : 'locationController'
    })
    .when('/company', {
    	templateUrl : 'partials/company.html',
    	controller : 'companyController'
    })
    .when('/contact', {
    	templateUrl : 'partials/contact.html',
    	controller : 'contactController'
    })
    .when('/services', {
    	templateUrl : 'partials/services.html',
    	controller : 'servicesController'
    })
    .when('/plan-by-others', {
    	templateUrl : 'partials/plan-by-others.html',
    	controller : 'plan-by-othersController'
    })
    .when('/plan-by-us', {
    	templateUrl : 'partials/plan-by-us.html',
    	controller : 'plan-by-usController'
    })
	.otherwise({ // if url doesn't exist, go to /home
		redirectTo: '/home'
	});

});


