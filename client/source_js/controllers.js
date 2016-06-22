var HireMeControllers = angular.module('HireMeControllers', ['ngCookies']);

HireMeControllers.controller('homeController', ['$scope','$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

}]);

HireMeControllers.controller('companyController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
	
}]);

HireMeControllers.controller('portfolioController', ['$scope', '$http', function($scope, $http) {

}]);

HireMeControllers.controller('contactController', ['$scope', '$http', function($scope, $http) {
    $scope.master = {};
    $scope.user = {};

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

    $scope.test = {'name': "somename", 'zipcode': "60101"};

 	  $scope.options = ["Referral", "Google", "Yahoo", "Yelp", "Other"];    
 	  $scope.contactreqs = ["Yes", "No"];

    $scope.update = function() {
       console.log($scope.user);
       $http.post('http://localhost:4000/api/contact',$scope.user).success(function(data) {
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