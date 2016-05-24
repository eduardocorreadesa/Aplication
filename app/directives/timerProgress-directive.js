(function(){
    'use strict';

    /*global angular*/
    angular.module('app').directive('timerProgress', timerProgress);

    timerProgress.$inject = ['$rootScope', '$interval', '$filter'];

    function timerProgress($rootScope, $interval, $filter){
        return function(scope, element, attrs) {
          var stopTime;

          function updateTime() {
            element.text($filter('date')($rootScope.timerProgress.setMilliseconds($rootScope.timerProgress.getMilliseconds() + 1000), 'HH:mm:ss'));
          }

          scope.$watch(attrs.timerProgress, function(value) {        
            updateTime();
          });

          stopTime = $interval(updateTime, 1000);
          
          element.on('$destroy', function() {
            $interval.cancel(stopTime);
          });
        }
    }
})();