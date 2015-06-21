(function() {
    var examples = angular.module('samples', []);

    examples.controller('database', ['$scope', '$http', function($scope, $http){
      
        this.getAll = function(){
            $http.get('http://192.168.178.33:3000/languages.json').
                success(function(data, status, headers, config) {
                    data.forEach(function(value, key) {
                      console.log(value);
                    });

                }).
                error(function(data, status, headers, config) {
                    alert('Error: Please debug in developer console');
                });
        };

        $scope.createNew = function($scope){
            $http.post('http://192.168.178.33:3000/languages.json', { language: { name: 'ololo' } }).
                success(function(data, status, headers, config) {
                    console.log('CREATED language: ');
                    console.log(data);

                }).
                error(function(data, status, headers, config) {
                    alert('Error: Please debug in developer console');
                });
        };

        $scope.updateRandom = function(){
            $http.get('http://192.168.178.33:3000/languages.json').
                    success(function(data, status, headers, config) {
                        var record = data[0];

                        if(record) {
                            $http.put('http://192.168.178.33:3000/languages/' + record.id + '.json', { name: 'otto' });
                        }
                    }).
                    error(function(data, status, headers, config) {
                        alert('Error: Please debug in developer console');
                    });
        };

        $scope.deleteRandom = function(){
            $http.get('http://192.168.178.33:3000/languages.json').
                success(function(data, status, headers, config) {
                    var record = data[0];
                    
                    if(record) {
                        $http.delete('http://192.168.178.33:3000/languages/' + record.id + '.json');
                    }
                    
                }).
                error(function(data, status, headers, config) {
                    alert('Error: Please debug in developer console');
                });
        };
       
    }]);	
		
})();