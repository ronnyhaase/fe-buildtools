angular.module('myapp', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('app', {
				url: '',
				controller: ['$state', function ($state) {
					$state.transitionTo('app.duties');
				}],
				template: '<ui-view />'
			})
			.state('app.duties', {
				url: '/duties',
				templateUrl: '/templates/duties.html',
				controller: 'CoffeeDutyController'
			})
			.state('app.about', {
				url: '/about',
				templateUrl: '/templates/about.html'
			});
	}]);