var HireMeControllers = angular.module('HireMeControllers', ['ngCookies']);

HireMeControllers.controller('homeController', ['$scope','$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

}]);

HireMeControllers.controller('companyController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {

}]);

HireMeControllers.controller('locationController', ['$scope', '$http', '$cookies', '$routeParams', function($scope, $http, $cookies, $routeParams) {
  var location = $routeParams.location;
  var folder = './img/portfolio/' + location;

  var img_count_map = {
    'danville': 4,
    'fremont1': 5,
    'fremont2': 3,
    'losgatos': 5,
    'menlopark': 7,
    'pleasanton': 6,
    'sanjose': 6,
    'saratoga1': 6,
    'saratoga2': 6
  };

  var img_count = new Array(img_count_map[location]);

  for (var i = 1; i <= img_count.length; i++) {
    img_count[i-1] = i;
  }

  console.log(img_count);
}]);

HireMeControllers.controller('portfolioController', ['$scope', '$http', function($scope, $http) {
  $scope.filterOptions = {
    projects: [
      {id : 2, name : 'Show All', size: 4 },
      {id : 3, name : 'Large', size: 3 },
      {id : 4, name : 'Medium', size: 2 },
      {id : 5, name : 'Small', size: 1 },
    ]
  };

  $scope.filterItem = {
    project: $scope.filterOptions.projects[0]
  };

  $scope.customFilter = function (data) {
    if (data.size === $scope.filterItem.project.size) {
      return true;
    } else if ($scope.filterItem.project.size === 4) {
      return true;
    } else {
      return false;
    }
  };

  $scope.data = [
    {
      name: "Danville Home",
      size: 1,
      url: "./img/portfolio/danville-thumb.jpg"
    },
    {
      name: "Fremont Home 1",
      size: 1,
      url: "./img/portfolio/fremont-home1-thumb.jpg"
    },
    {
      name: "Fremont Home 2",
      size: 1,
      url: "./img/portfolio/fremont-home2-thumb.jpg"
    },
    {
      name: "Los Gatos Home",
      size: 2,
      url: "./img/portfolio/los-gatos-thumb.jpg"
    },
    {
      name: "Menlo Park Home",
      size: 2,
      url: "./img/portfolio/menlo-park-thumb.jpg"
    },
    {
      name: "Pleasanton Home",
      size: 2,
      url: "./img/portfolio/pleasanton-thumb.jpg"
    },
    {
      name: "San Jose Home",
      size: 3,
      url: "./img/portfolio/san-jose-thumb.jpg"
    },
    {
      name: "Saratoga Home 1",
      size: 3,
      url: "./img/portfolio/saratoga-home1-thumb.jpg"
    },
    {
      name: "Saratoga Home 2",
      size: 3,
      url: "./img/portfolio/saratoga-home2-thumb.jpg"
    },
  ];
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
       $http.post('http://192.168.29.217:4000/api/contact',$scope.user).success(function(data) {	//ToDo Change this to your server IP
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
