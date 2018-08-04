(function(app) {
	app.controller('HomeController', ['$scope','$state', function($scope, $state) {
		$scope.logout = function(ev){
            $state.go("app");
        }
	}]);
})(microchain);
