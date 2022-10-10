var app = angular.module('rosterApp', ['ngSanitize', 'ngAnimate']);

app.controller('rosterCtrl', ['$scope', function ($scope) {
  $scope.newPlayer = {};

  $scope.players = [

  ];

  $scope.addPlayer = function() {
    $scope.players.push($scope.newPlayer);
    $scope.newPlayer = {};
  };

  $scope.removePlayer = function(player) {
    if(confirm("Are you sure?")) {
      $scope.players.splice($scope.players.indexOf(player), 1);
    }
  };
  
}]);