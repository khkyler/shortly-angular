angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};//{links:['www.amazon.com','www.facebooks.com']};
  $scope.getLinks = function(){
    Links.grabLinks().success(function(data){
      console.log("&^%^%$$ This is data:",data);
      $scope.data.links = data;
    }).error(function(err){
      console.log(err);
    });
  };

  $scope.getLinks();





});
