angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.ejs',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: '/partials/about.ejs'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.myVar = "Hello Angular";
});