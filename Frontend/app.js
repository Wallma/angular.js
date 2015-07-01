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
    
})();