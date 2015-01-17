angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  //$scope. = "";
  $scope.addLink = function () {
    console.log("addLink()");
    Links.postLinks($scope.url).success(function (data) {
      console.log('success!!', data);
    }).error(function(err) {
      console.log(err);
    });
  };
});
