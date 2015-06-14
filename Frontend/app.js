(function() {
  var app = angular.module('ProductInput', []);

  app.controller('dropdown', function(){
    this.vendorlist = vendors;
	this.titellist = titel;
	this.formlist = [{
		name: 'Herr'
        },
        {
            name: 'Frau'
        }];
	});

	var vendors = [{
		name: 'Aldi'
	},
	{
		name: 'Edeka'
	},
	{
		name: 'Lidl'
	},
	{
		name: 'Norma'
	},
	{
		name: 'Penny'
	}];
	
		var titel = [{
		name: 'Dr.'
	},
	{
		name: 'Dr. Prof.'
	},
	{
		name: 'Prof.'
	}];
	
		
})();