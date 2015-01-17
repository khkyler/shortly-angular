angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    'url': ''
  };
  //$scope. = "";
  $scope.addLink = function () {
    console.log("addLink()");
    Links.postLinks($scope.link).success(function (data) {
      console.log('success!!', data);
    }).error(function(err) {
      console.log(err);
    });
  };
});
