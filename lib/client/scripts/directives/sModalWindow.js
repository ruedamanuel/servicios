/**
 * # Modal Window Directive
 *
 * Creates a modal window with a proprietary controller and
 * functionality.
 */

"use strict";

module.exports = function($log, $window, $rootScope, $templateCache) {
  var angular = window.angular;
  return {
    restrict: "A",
    template: $templateCache.get("directives/sModalWindow.html"),
    transclude: true,
    replace: true,
    link: function(scope, element) {

      var window = angular.element($window);

      function init(){
        scope.modalY = window[0].pageYOffset;
        $rootScope.modalSettings = {
          coordinates: {
            x: 0,
            y: scope.modalY
          }
        };
        element.css("top", scope.modalY + "px");

        /**
         * We need to make sure that the modal window has focus.
         * Get the DOM element being transcluded into the modal window.
         * Give focus to the first input or button element within that transcluded element.
         * If there are no inputs or buttons, give focus to the close button.
         */
        var e = element[0], inputElem, closeElem, targetElem;
        inputElem = e.querySelector(".modal-wrapper > [ng-transclude]").querySelector("input, button");
        closeElem = e.querySelector(".modal-wrapper > a");
        targetElem = inputElem || closeElem;
        targetElem.focus();
      }

      // Function to make sure the modal occupies the whole window and disables scrolling when open.
      window.bind("scroll", function() {
        this.scrollTo(0, scope.modalY);
        element.css("top", scope.modalY + "px");
        scope.$apply();
      });

      init();

      scope.$on("$destroy", function() {
        window.unbind("scroll");
      });

    }
  };
};
