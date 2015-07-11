(function() {
  var app = angular.module('mainModule', []);
    
    app.controller('attribute', ['$scope', function($scope){
    
    $scope.name = 'firstName';
    $scope.type = 'text';
    }]);
})();