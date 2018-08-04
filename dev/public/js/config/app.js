var microchain = angular.module('microchain', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function (app) {
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('app', {
            url: '/',
            templateUrl: 'partials/default.html',
            controller: 'DefaultController'
        })
        .state('app.signup', {
            url: '/signup',
            views: {
                'content': {
                    templateUrl: 'partials/signup.html',
                    controller: 'SignUpController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'content': {
                    templateUrl: 'partials/about-partial.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        }).state('app.home', {
            url: '/home',
            views: {
                'content': {
                    templateUrl: 'partials/home-partial.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                },
                params: 
                {
                    'userdetails': ''
                }
            }
        })
    }]);
})(microchain);
