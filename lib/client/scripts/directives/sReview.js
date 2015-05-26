/**
 * # Review Directive
 *
 * Used to encapsulate reviews in profiles.
 */

"use strict";

module.exports = function($templateCache){
  return {
    restrict: "A",
    replace: true,
    template: $templateCache.get("directives/sReview.html"),
    scope: {
      review: "="
    },
    link: function(scope){
      console.log(scope.review);
    }
  };
};
