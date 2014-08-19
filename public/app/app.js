angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.ejs',
            controller: 'mvMainCtrl'
        })
        .when('/about', {
            templateUrl: '/partials/about.ejs'
        })
        .otherwise({
            redirectTo: '/'
        });
});
