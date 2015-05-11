/**
 * # Provider Card Directive
 *
 * This is the collection of elements that is listed in
 * search results for providers.
 */

"use strict";
module.exports = function($templateCache){
  return {
    restrict: "A",
    template: $templateCache.get("directives/sProviderCard.html"),
    scope: {
      providerInfo: "="
    },
    link: function(scope){
      console.log(scope.providerInfo);
    }
  };
};
