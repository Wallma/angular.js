(function() {
  var app = angular.module('mainModule', []);
  
    //Inputfelder via Einzelangabe in einem einzigen Controller:
    app.controller('registration', ['$scope', '$http', function($scope, $http){
        
        $scope.gender = {name: 'gender', label: 'Anrede', placeholder: 'Anrede', value: '', options: []};
        
        $http.get('http://angular.local:3000/genders.json').
            success(function(data, status, headers, config) {
                $scope.gender.options = data;
            }).
            error(function(data, status, headers, config) {
                alert('Error: Please debug in developer console');
            });
        
        $scope.firstName = {name: 'firstName', label: 'Vorname', type: 'text', placeholder: 'John', word: /[a-zäöüÄÖÜß\s]*/i, value: ''};
        
        $scope.lastName = {name: 'lastName', label: 'Nachname', type: 'text', placeholder: 'Doe', word: /[a-zäöüÄÖÜß\s]*/i, value: ''};
        
        $scope.userName = {name: 'userName', label: 'Benutzername', type: 'text', placeholder: 'DoeJ', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.streetName = {name: 'streetName', label: 'Straße', type: 'text', placeholder: 'Kingstr.', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.streetNumber = {name: 'streetNumber', label: 'Hausnummer', type: 'number', placeholder: '12', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.zip = {name: 'zip', label: 'Postleitzahl', type: 'number', placeholder: '34003', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.cityName = {name: 'cityName', label: 'Ort', type: 'text', placeholder: 'Bristol', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.birthDay = {name: 'birthDay', label: 'Geburtstag', type: 'date', placeholder: 'dd.MM.yyyy', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.birthCity = {name: 'birthCity', label: 'Geburtsort', type: 'text', placeholder: 'London', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.mailAddress = {name: 'mailAddress', label: 'E-Mailadresse', type: 'email', placeholder: 'john.doe@online.de', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.phoneNumber = {name: 'phoneNumber', label: 'Telefonnummer', type: 'tel', placeholder: '80489/0000000', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.mobileNumber = {name: 'mobileNumber', label: 'Handynummer', type: 'tel', placeholder: '0172/0000000', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.password = {name: 'password', label: 'Passwort', type: 'password', placeholder: 'password', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.repassword = {name: 'repassword', label: 'Passwort wiederholen', type: 'password', placeholder: 'password', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
   
        // Validierung:
        $scope.getItemState = function (item)
        {
          if (item.$valid)
          {
            return "valid";
          }
          else if (item.$invalid)
          {
            return "invalid";
          }
          else
          {
            return "";
          }
        };

        $scope.getItemError = function (item)
        {
          if (item.$invalid)
          {
            return item.$error;
          }
          else
          {
            return null;
          }
        };

        $scope.getValidationCSSClass = function (item)
        {
          // We show an error only if the item has been modified
          // at least once to avoid displaying errors as soon as
          // the form is loaded (we wait for the user to interact
          // with the controls before declaring them invalid).
          return {
            invalidItem: item.$invalid && item.$dirty
          };
        };

        $scope.getValidationError = function (item)
        {
          // We show an error only if the item has been modified
          // at least once to avoid displaying errors as soon as
          // the form is loaded (we wait for the user to interact
          // with the controls before declaring them invalid).
          if (item.$dirty && item.$error.required)
          {
            return "Dieses Feld darf nicht leer sein";
          }
          else
          {
            return "";
          }
        };
        
    }]);
    
    
    
    //Input Directive
    app.directive('inputCustom', function(){ 
     return {
        restrict: 'E',
        priority: '1',
        replace: 'true',
        scope: {
            field: '='
        },
        templateUrl: 'directives/input.html'
      };
    });
    
    // Dropdown Directive
    app.directive('dropdownCustom', function(){ 
     return {
        restrict: 'E',
        priority: '1',
        replace: 'true',
        scope: {
            field: '='
        },
        templateUrl: 'directives/dropdown.html'
      };
    });
    
    
})();