(function (app) {
    app.controller('DefaultController', ['$scope', '$state', '$mdDialog', function ($scope, $state, $mdDialog) {
        $scope.enableLogin = true;
        $scope.userdetails = {};
        $scope.loginForm = null;
        $scope.showdefault = true;
        $scope.logout = function () {
            $scope.enableLogin = true;
            $state.go("app");
        }
        $scope.showSignUp = function () {
            $scope.showdefault = false;
            $state.go("app.signup");
        }
        $scope.$on('showdefault', function(event, val){
            $scope.showdefault = val.message;
        });
        $scope.showLogin = function (ev) {
            loginForm = $mdDialog.show({
                locals: {
                    parentScope: $scope,
                    userdetails: $scope.userdetails
                },
                controller: ['$scope', 'parentScope', 'userdetails', function (scope, parentScope, userdetails) {
                    scope.validateLogin = function () {
                        parentScope.validateLogin(scope.userdetails, scope);
                    };
                    scope.hideLogin = function(){
                        parentScope.hideLogin();
                    }
                }],
                templateUrl: 'partials/loginform.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            }).then(function (result) {
                if( result == undefined){
                    $mdDialog.hide();
                    return;
                }
                $scope.enableLogin = false;
                $state.go("app.home", result)
            }, function () {
                
            });
        };
        $scope.hideLogin = function(){
            $mdDialog.hide();
        }

        $scope.validateLogin = function(userdetails){
            $scope.enableLogin = false;
            $mdDialog.hide();
            $state.go("app.home", userdetails)
        }
        
    }]);
})(microchain);
