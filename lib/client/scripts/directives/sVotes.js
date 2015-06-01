/**
 * # Votes directive
 *
 * Module for up and down voting elements and displaying a tally of such votes.
 */

"use strict";

module.exports = function($templateCache){
  return {
    restrict: "A",
    template: $templateCache.get("directives/sVotes.html"),
    replace: true,
    scope: {
      voteData: "="
    },
    link: function(scope, elem){
      scope.$watch("voteData", function(){
        console.log("voteData: ", scope.voteData);
        //scope.total = scope.voteData.total;
      });
      var upVote = elem.find(".votes-arrow-up"),
        downVote = elem.find(".votes-arrow-down");
      upVote.bind("click", function(e){
        console.log("upvoted: ", e);
      });
      downVote.bind("click", function(e){
        console.log("downvoted: ", e);
      });
    }
  };
};
