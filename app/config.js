(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(function($rootScope, $location, $http){
    	/*variável utilizada pelo timerProgress*/
    	$rootScope.timerProgress = new Date(0, 0, 0, 0, 0, 0, 0);

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
        	if (next.authorize && !$rootScope.isAuthenticated) {
				$location.path("/login");
	        }        	
        });
    });
})();