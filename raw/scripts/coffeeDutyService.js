angular.module('myapp').service('coffeeDutyService', ['$http', function ($http) {
	var data = [
		{
			date: '01-03-2015',
			employee: 'Ronny'
		},
		{
			date: '02-03-2015',
			employee: 'Oli'
		},
		{
			date: '03-03-2015',
			employee: 'Steffen'
		}
	];

	this.getData = function () {
		return data;
	};
}]);

