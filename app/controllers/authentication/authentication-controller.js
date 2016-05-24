(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('AuthenticationController', AuthenticationController);

    AuthenticationController.$inject = ['$scope', '$rootScope', '$location', '$route'];

    function AuthenticationController($scope, $rootScope, $location, $route){
        var vm = this;
        vm.SetCredentials = SetCredentials;

        $scope.options = {
            'onsuccess': function(response) {
               SetCredentials(response);
            },
            'width' : '340',
            'height' : '50',
            'theme' : 'dark',
            'longtitle' : 'true',
            'scope': 'profile email'            
        }

        $rootScope.signOut = function() {
            $rootScope.isAuthenticated = false;
            /*global gapi*/
            var auth2 = gapi.auth2.getAuthInstance();
            
            auth2.signOut().then(function () {
                $location.path('/login');
                $route.reload();
            });
        };       
      
        function SetCredentials(googleUser) {
            $rootScope.isAuthenticated = true;
            var user = googleUser.getBasicProfile();
            
            $rootScope.currentUser = {
                'id' : user.getId(),
                'name' : user.getName(),
                'imageUrl' : user.getImageUrl(),
                'email' : user.getEmail(),
                'givenName' : user.getGivenName(),
                'familyName' : user.getFamilyName()
            };
    
            $rootScope.$apply(function() {
                $location.path("/");
            });
        }
    }
})();