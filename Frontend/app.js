(function() {
  var app = angular.module('dropdownInput', []);

  app.controller('dropdown', ['$scope','$http', function($scope, $http){
  
        $scope.getGenders = function(){
            $http.get('http://192.168.178.33:3000/genders.json').
                success(function(data, status, headers, config) {
                    data.forEach(function(id, name) {
                      console.log(name);
                    });

                }).
                error(function(data, status, headers, config) {
                    alert('Error: Please debug in developer console');
                });
            };
        $scope.myGender = $scope.getGenders[0];

        /*$scope.genders = [
            {name: 'Frau'},
            {name: 'Herr'}
        ];
        $scope.myGender = $scope.genders[0];*/
            
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
      
    }]);
		
})();