(function() {
  var app = angular.module('mainModule', []);
  
     //Inputfelder via Einzelangabe in einem einzigen Controller:
    app.controller('registration', ['$scope', function($scope){
    
        $scope.firstName = {name: 'firstName', field: 'Vorname', type: 'text', placeholder: 'John', word: /[a-zäöüÄÖÜß\s]*/i, value: ''};
        
        $scope.lastName = {name: 'lastName', field: 'Nachname', type: 'text', placeholder: 'Doe', word: /[a-zäöüÄÖÜß\s]*/i, value: ''};
        
        $scope.userName = {name: 'userName', field: 'Benutzername', type: 'text', placeholder: 'DoeJ', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.streetName = {name: 'streetName', field: 'Straße', type: 'text', placeholder: 'Kingstr.', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.streetNumber = {name: 'streetNumber', field: 'Hausnummer', type: 'number', placeholder: '12', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.zip = {name: 'zip', field: 'Postleitzahl', type: 'number', placeholder: '34003', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.cityName = {name: 'cityName', field: 'Ort', type: 'text', placeholder: 'Bristol', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.birthDay = {name: 'birthDay', field: 'Geburtstag', type: 'date', placeholder: 'dd.MM.yyyy', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.birthCity = {name: 'birthCity', field: 'Geburtsort', type: 'text', placeholder: 'London', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.mailAddress = {name: 'mailAddress', field: 'E-Mailadresse', type: 'email', placeholder: 'john.doe@online.de', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.phoneNumber = {name: 'phoneNumber', field: 'Telefonnummer', type: 'tel', placeholder: '80489/0000000', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.mobileNumber = {name: 'mobileNumber', field: 'Handynummer', type: 'tel', placeholder: '0172/0000000', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.password = {name: 'password', field: 'Passwort', type: 'password', placeholder: 'password', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
        $scope.repassword = {name: 'repassword', field: 'Passwort wiederholen', type: 'password', placeholder: 'password', word: /^\s*[a-zäöüÄÖÜß]*\s*$/i, value: ''};
        
    }]);
    
    
    

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
    
    
})();