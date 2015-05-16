/**
 * # Google Map Embedding directive
 */

"use strict";
var angular = window.angular;

module.exports = function($templateCache, $sce, $window){
  return {
    restrict: "A",
    template: $templateCache.get("directives/sMap.html"),
    scope: {
      address: "=",
      city: "=",
      country: "="
    },
    link: function(scope, element){
      scope.apiKey = "AIzaSyD5RoNgkibbYXCFhCRGP-r606ikqALI5RE";
      scope.location = scope.address + ", " + scope.city + ", " + scope.country;
      scope.locationEscaped = scope.location.replace(/\s/g, "+");
      scope.setDimensions = function(){
        scope.width = element.parent().width();
        scope.height = element.parent().height();
      };
      angular.element($window).bind("resize", function(){
        scope.setDimensions();
        scope.$digest();
      });
      scope.setDimensions();
      //scope.url = $sce.trustAsResourceUrl(
      //  "https://www.google.com/maps/embed/v1/place?key=" + scope.apiKey + "&q=" + scope.locationEscaped
      //);
      scope.url = $sce.trustAsResourceUrl(
        "https://www.google.com/maps/embed/v1/place?key=" + scope.apiKey +
        "&q=Calle+71+%23+1-90,+Bogotá,+Cundinamarca,+Colombia"
      );
    }
  };
};
