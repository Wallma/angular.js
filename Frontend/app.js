(function() {
  var app = angular.module('dropdownInput', []);

    app.controller('dropdown', ['$scope','$http', function($scope, $http){
      
    /*$scope.genders = [];

    $http.get('http://angular.local:3000/genders.json').
        success(function(data, status, headers, config) {
            $scope.genders = data;
            //console.log(data);
            $scope.myGender = $scope.genders[0];

        }).
        error(function(data, status, headers, config) {
            alert('Error: Please debug in developer console');
        }); */
  
        $scope.genders = [
            {name: 'Frau'},
            {name: 'Herr'}
        ];
        $scope.myGender = $scope.genders[0];
            
        $scope.titels = [
            {name: 'Dr.'},
            {name: 'Prof.'},
            {name: 'Dr. Prof.'}
        ];
        $scope.myTitel = $scope.titels[0];
              
        $scope.vendors = [
            {name: 'Aldi'},
            {name: 'Edeka'},
            {name: 'Lidl'},
            {name: 'Norma'},
            {name: 'Penny'}
        ];
        $scope.myVendor = $scope.vendors[0];
        
        $scope.countries = [
            {name: 'Deutschland'}
        ];
        $scope.myCountry = $scope.countries[0];        
        
        $scope.states = [
            {name: 'Baden-Württemberg'},
            {name: 'Bayern'},
            {name: 'Berlin'},
            {name: 'Brandenburg'},
            {name: 'Bremen'},
            {name: 'Hamburg'},
            {name: 'Hessen'},
            {name: 'Mecklenburg-Vorpommern'},
            {name: 'Niedersachsen'},
            {name: 'Nordrhein-Westfalen'},
            {name: 'Rheinland-Pfalz'},
            {name: 'Saarland'},
            {name: 'Sachsen'},
            {name: 'Sachsen-Anhalt'},
            {name: 'Schleswig-Holstein'},
            {name: 'Thüringen'}
        ];
        $scope.myState = $scope.states[0];  
      
    }]);

    app.controller('input', ['$scope', function($scope){
    
    $scope.register = { firstName: '', 
                        lastName: '',
                        userName: '',
                        streetName: '',
                        streetNumber: '',
                        zip: '',
                        cityName: '',
                        birthDay: new Date(),
                        birthCity: '',
                        mailAddress: '',
                        phoneNumber: '',
                        mobileNumber: '',
                        password: '',
                        repassword: '',
                        word: /^\s*[a-zäöüÄÖÜß]*\s*$/i
                      };
        
    }]);
    
    app.directive('inputField', function() { 
     return {
         restrict: 'E',
         scope: {
             inputName: '@',
             identifierName: '@',
             typeName: '@',
             patternName: '@'
         },
        templateUrl: 'input-field.html'
            };
 
    
    });
    
    
    /* 
    Use the ng-form directive inside of the tag in which you are using the ng-repeat directive. You can then use the scope created by the ng-form directive to reference a generic name. For example:

    <div class="form-group col-sm-6" data-ng-form="subForm" data-ng-repeat="field in justificationInfo.justifications"">

        <label for="{{field.label}}"><h3>{{field.label}}</h3></label>
        <i class="icon-valid" data-ng-show="subForm.input.$dirty && subForm.input.$valid"></i>
        <i class="icon-invalid" data-ng-show="subForm.input.$dirty && subForm.input.$invalid"></i>
        <textarea placeholder="{{field.placeholder}}" class="form-control" id="{{field.label}}" name="input" type="text" rows="3" data-ng-model="field.value" required>{{field.value}}</textarea>

    </div>

    Credit to: http://www.benlesh.com/2013/03/angular-js-validating-form-elements-in.html
    */
    
    
})();