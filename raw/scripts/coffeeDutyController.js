angular.module('myapp').controller('CoffeeDutyController', ['coffeeDutyService', '$scope', function (coffeeDutyService, $scope) {
	$scope.duties = coffeeDutyService.getData();
}]);
