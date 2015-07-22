var myApp = angular.module('MyApp', []);

myApp.controller('MyCtrl', ['$scope', function ($scope) {
    /* $scope.foo = "I'm foo!"; */
    $scope.foo = {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: 'Im foo!'};
    $scope.foo1 = {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: 'Im foo!'};
}]);

myApp.directive('myDirective', function () {
    return {
        restrict: 'E',
        priority: '1',
        templateUrl: 'nested_test_sub.html',
        replace: true,
        scope: {
            customField: '=fieldname',
            ngModel : '=',
        },
    };
});