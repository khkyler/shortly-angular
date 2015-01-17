angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};//{links:['www.amazon.com','www.facebooks.com']};
  $scope.getLinks = function(){
    Links.grabLinks().success(function(data){
      $scope.data.links = data;
    }).error(function(err){
      console.log(err);
    });
  };

  $scope.addVisit = function(index){
    console.log("this is in addVisit and here is data: ",$scope.data.links[index]);
    $scope.data.links[index].visits += 1;
    console.log('VISITS!!!!!!!!!!!!!!!!!', $scope.data.links[index].visits);
  }

  $scope.getLinks();





});
