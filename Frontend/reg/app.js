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
        
        $scope.firstName = {name: 'firstName', label: 'Vorname', type: 'text', placeholder: 'John', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // max 40 Zeichen
        $scope.lastName = {name: 'lastName', label: 'Nachname', type: 'text', placeholder: 'Doe', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // mit Vorschlag ausfüllen (Vorname + erster Buchstabe Nachname + Punkt)
        $scope.userName = {name: 'userName', label: 'Benutzername', type: 'text', placeholder: 'DoeJ', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.streetName = {name: 'streetName', label: 'Straße', type: 'text', placeholder: 'Kingstr.', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // Hausnummern wie z.B. 2a???
        $scope.streetNumber = {name: 'streetNumber', label: 'Hausnummer', type: 'number', placeholder: '12', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // Number als Type sinnvoll? Evtl. besser String?
        $scope.zip = {name: 'zip', label: 'Postleitzahl', type: 'number', placeholder: '34003', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.cityName = {name: 'cityName', label: 'Ort', type: 'text', placeholder: 'Bristol', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // Max. 1880? - Min. (Today - 1 Jahr?)
        $scope.birthDay = {name: 'birthDay', label: 'Geburtstag', type: 'date', placeholder: 'dd.MM.yyyy', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.birthCity = {name: 'birthCity', label: 'Geburtsort', type: 'text', placeholder: 'London', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.mailAddress = {name: 'mailAddress', label: 'E-Mailadresse', type: 'email', placeholder: 'john.doe@online.de', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // Optional (wenn es befüllt wird umso besser)
        $scope.phoneNumber = {name: 'phoneNumber', label: 'Telefonnummer', type: 'tel', placeholder: '80489/0000000', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        // Optional (wenn es befüllt wird umso besser)
        $scope.mobileNumber = {name: 'mobileNumber', label: 'Handynummer', type: 'tel', placeholder: '0172/0000000', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.password = {name: 'password', label: 'Passwort', type: 'password', placeholder: 'password', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.repassword = {name: 'repassword', label: 'Passwort wiederholen', type: 'password', placeholder: 'password', min: '', max: '', word: /^[a-zäöüÄÖÜß\s]*$/i, value: ''};
        
        $scope.debug = function(){
            debugger;
        };
       
    }]);
    
    //Input Directive
    app.directive('inputCustom', function(){ 
     return {
        restrict: 'E',
        priority: '1',
        replace: 'true',
        scope: {
            field: '=',
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