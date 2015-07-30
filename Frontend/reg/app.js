(function() {
  var app = angular.module('mainModule', []);
  
     //Inputfelder via Einzelangabe in einem einzigen Controller:
    app.controller('registration', ['$scope', '$http', function($scope, $http){
        
        $http.get('http://angular.local:3000/genders.json').
            success(function(data, status, headers, config) {
                $scope.genders = data;
            }).
            error(function(data, status, headers, config) {
                alert('Error: Please debug in developer console');
            });

    
        $scope.gender = {name: 'gender', label: 'Anrede', placeholder: 'Anrede', value: '', options: $scope.genders};
        
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
        
    }]);
    
    
    

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