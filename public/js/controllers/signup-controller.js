(function (app) {
	app.controller('SignUpController', ['$scope', '$state', 'accountService', function ($scope, $state, accountService) {
		$scope.signupdata = {};
		$scope.submit = function (ev) {
			$state.go("app");
		}
		$scope.cancel = function () {
			$scope.$emit('showdefault', { "message": true });
		}
		$scope.register = function () {
			accountService.createAccount($scope.signupdata.password).then(function (data) {
				console.log("Address details: ", data);
				$scope.signupdata.address = data;
				$scope.updateAccount($scope.signupdata)
			});
		}
		$scope.updateAccount = function (userDetails) {
			var txnId = accountService.updateAccount(userDetails)
			cosole.log("Transaction success", txnId);
			$state.go("app");
		}
	}]);
})(microchain);
