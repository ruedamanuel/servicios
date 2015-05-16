/**
 * # Pull Down directive
 *
 * Forces an element to align with the bottom of the element that
 * contains it.
 */

"use strict";
var angular = window.angular;

module.exports = function($window, $timeout){
  return {
    restrict: "A",
    link: function(scope, element){
      scope.pullDown = function(){
        element.css("margin-top", element.parent().height()-element.height());
      };
      angular.element($window).bind("resize", scope.pullDown);
      $timeout(scope.pullDown, 50);
    }
  };
};
