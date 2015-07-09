angular.module("mainModule", [])
  .controller("mainController", function ($scope)
  {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.updateName = function (firstName, lastName)
    {
      $scope.firstName = firstName;
      $scope.lastName = lastName;
    };
  })
  // 2. Inherited scope (scope: true)
  .directive("nghInheritedScopeDir", function ()
  {
    return {
      scope: true,
      template:
        '<label>First name: <input type="text" ng-model="firstName"/></label><br />' +
        '<label>Last name: <input type="text" ng-model="lastName"/></label><br />' +
        '<br />' +
        '<strong>First name:</strong> {{firstName}}<br />' +
        '<strong>Last name:</strong> {{lastName}}'
    };
  })

/*
http://jsfiddle.net/cherniv/5u4Xp/
http://www.angularjshub.com/examples/customdirectives/scope/
http://www.angularjshub.com/examples/forms/textinputs/
http://www.angularjshub.com/examples/forms/nestedforms/
*/