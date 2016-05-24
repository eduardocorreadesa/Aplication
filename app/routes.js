(function(){
    'use strict';
    
    /*global angular*/
    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html',
                authorize: true
            })
            .when('/login', {
                controller: 'AuthenticationController',
                controllerAs: 'vm',
                templateUrl: 'app/views/authentication/authentication.html'
            })
            .otherwise({
                templateUrl: 'app/views/home/404.html'
            });
    });
})();