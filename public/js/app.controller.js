var myApp = angular.module('myApp',[]);

myApp.controller('myAppController', ['$scope', '$http', function ($scope, $http, myAppService) {

  $scope.measurements = [];

  $scope.init = function() {
    $http.get('http://localhost:3000/measurement/test').then(function(result) {
      $scope.measurements = result.data;});
  }

  $scope.init();
}]);
