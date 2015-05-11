/**
 * # Client Tests Index
 *
 * Lists all unit tests that should be run with gulp.
 */

"use strict";

(function(){
  require("./factories/profession");
  require("./factories/provider");

  require("./controllers/header");
  require("./controllers/home");
  require("./controllers/footer");

  require("./directives/sServiceSearch");
})();
