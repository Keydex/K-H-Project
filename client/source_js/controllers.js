opevar HireMeControllers = angular.module('HireMeControllers', ['ngCookies']);

HireMeControllers.controller('homeController', ['$scope','$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

}]);

HireMeControllers.controller('companyController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
	
}]);

HireMeControllers.controller('portfolioController', ['$scope', '$http', function($scope, $http) {

}]);

HireMeControllers.controller('contactController', ['$scope', '$http', function($scope, $http) {
      $scope.master = {};
      $scope.user = {};
      $scope.test = {'name': "somename", 'zipcode': "60101"};

 	  $scope.arrays = ["Referral", "Google", "Yahoo", "Yelp", "Other"];    
 	  $scope.contactreq = ["Yes", "No"];

$scope.update = function(user) {
       console.log(user);
       $http.post('http://localhost:4000/api/contact',$scope.test).success(function(data) {
         console.log("It came over here Matt");
     }).error(function (err) {
       console.log(err);
     });

   };


}]);

HireMeControllers.controller('servicesController', ['$scope', '$http', function($scope, $http) {

}]);

HireMeControllers.controller('plan-by-othersController', ['$scope', '$http', function($scope, $http) {

}]);

HireMeControllers.controller('plan-by-usController', ['$scope', '$http', function($scope, $http) {

}]);