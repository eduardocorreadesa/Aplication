(function(){
    'use strict';

    /*global angular*/
    angular.module('app').directive('googleSignInButton', googleSignInButton);

    googleSignInButton.$inject = ['$rootScope', '$location'];

    function googleSignInButton(){
        return {
          scope: {
            buttonId: '@',
            options: '&'
          },
          template: '<div></div>',
          link: function(scope, element, attrs) {
            var div = element.find('div')[0];
            div.id = attrs.buttonId;
            gapi.signin2.render(div.id, scope.options());
        	}
        }
    }    	
})();