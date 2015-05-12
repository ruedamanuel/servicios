/**
 * # Provider Card Directive
 *
 * This is the collection of elements that is listed in
 * search results for providers.
 */

"use strict";
module.exports = function($templateCache, $state){
  return {
    restrict: "A",
    template: $templateCache.get("directives/sProviderCard.html"),
    scope: {
      providerInfo: "="
    },
    link: function(scope, element){
      //console.log(scope.providerInfo);
      element.bind("click", function(){
        $state.transitionTo("app.home");
      });
    }
  };
};
