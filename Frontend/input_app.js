(function() {
  var app = angular.module('mainModule', []);
 
    //Inputfelder via Einzelangabe:
    
    app.controller('firstName', ['$scope', function($scope){
    
        $scope.attribute = {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''};
    }]);
    
    app.controller('lastName', ['$scope', function($scope){

        $scope.attribute = {name: 'lastName', field: 'Nachname', type: 'text', placeholder: 'Doe', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''};
    }]);
    
    //Inputfelder via Einzelangabe in einem einzigen Controller:
    app.controller('registration', ['$scope', function($scope){
    
        $scope.firstName = {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''};
        $scope.lastName = {name: 'lastName', field: 'Nachname', type: 'text', placeholder: 'Doe', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''};
    }]);
    
    //Inputfelder via Repeat:
    
    app.controller('attribute', ['$scope', function($scope){
        
        $scope.attributes = [
                            {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'lastName', field: 'Nachname', type: 'text', placeholder: 'Doe', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'userName', field: 'Benutzername', type: 'text', placeholder: 'DoeJ', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'streetName', field: 'Straße', type: 'text', placeholder: 'Kingstr.', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'streetNumber', field: 'Hausnummer', type: 'number', placeholder: '12', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'zip', field: 'Postleitzahl', type: 'number', placeholder: '34003', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'cityName', field: 'Ort', type: 'text', placeholder: 'Bristol', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'birthDay', field: 'Geburtstag', type: 'date', placeholder: 'dd.MM.yyyy', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'birthCity', field: 'Geburtsort', type: 'text', placeholder: 'London', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'mailAddress', field: 'E-Mailadresse', type: 'email', placeholder: 'john.doe@online.de', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'phoneNumber', field: 'Telefonnummer', type: 'tel', placeholder: '80489/0000000', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'mobileNumber', field: 'Handynummer', type: 'tel', placeholder: '0172/0000000', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'password', field: 'Passwort', type: 'password', placeholder: 'password', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''},
                            {name: 'repassword', field: 'Passwort wiederholen', type: 'password', placeholder: 'password', word: '/^\s*[a-zäöüÄÖÜß]*\s*$/i', value: ''}
                            ];
        }]);
    
 
    // Direktive als Element mit Feldnamen
    
    app.directive('inputSubFormCustom', function(){ 
     return {
        restrict: 'E',
        priority: '1',
        replace: 'true',
        scope: {
          customField: '=fieldname'
        },
        templateUrl: 'input_subform_custom.html'
      };
    });    
    
    // Direktive als Attribute
    
    app.directive('inputSubForm', function(){ 
     return {
        restrict: 'A',
        priority: '1',
        replace: 'true',
        scope: true,
        templateUrl: 'input_subform.html'
      };
    });
    
    // Direktive als Element
    
    app.directive('inputRepeatSubForm', function(){ 
     return {
        restrict: 'E',
        priority: '1',
        replace: 'true',
        scope: true,
        templateUrl: 'input_subform.html'
      };
    });
})();