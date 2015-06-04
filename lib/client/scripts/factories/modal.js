/**
 * # Modal Factory
 *
 * Provides all functions necessary to deploy custom modal windows
 * throughout the application.
 */

"use strict";

var _ = require("lodash");
/*jshint-W072*/
module.exports = function($q, $compile, $templateCache, $document, $rootScope, $controller, $window) {
  var angular = window.angular,
    openState = false;
  return {
    isOpen: function() {
      $rootScope.modal = {isOpen: openState};
      return openState;
    },
    open: function(options) {

      var deferred, modalInstance, template, bodyDom, modalDom, modalScope, ctrlInstance, ctrlLocals, remove;

      deferred = $q.defer();

      modalInstance = {
        result: deferred.promise,
        close: function(result) {
          remove();
          deferred.resolve(result);
        },
        dismiss: function(reason) {
          remove();
          deferred.reject(reason);
        },
        rebuildBinding: function() {
          var window = angular.element($window);
          window.bind("scroll", function() {
            this.scrollTo(0, !!$rootScope.modalSettings ? $rootScope.modalSettings.coordinates.y : 0);
            $rootScope.$apply();
          });
        }
      };

      remove = function() {
        modalScope.$destroy();
        $document.unbind("keydown");
        modalDom.remove();
        openState = false;
        $rootScope.modal = {isOpen: openState};
        $rootScope.$broadcast("modal closing");
      };

      // Create a new scope for the modal.
      modalScope = $rootScope.$new();

      // Create a new controller for the modal and add locals to it.
      ctrlLocals = {};
      ctrlLocals.$scope = modalScope;
      ctrlLocals.$modalInstance = modalInstance;
      ctrlLocals.$scope.closeModal = function(){
        modalInstance.dismiss("cancel");
      };
      _.forEach(options.data, function(val, key) {
        ctrlLocals[key] = val;
      });
      ctrlInstance = $controller(options.controller, ctrlLocals);

      // Get the template, wrap it in our rzModalWindow, compile, and append to the body.
      bodyDom = $document.find("body").eq(0);
      template = $templateCache.get(options.templateUrl);
      modalDom = angular.element("<div s-modal-window></div>");
      modalDom.html(template);
      modalDom = $compile(modalDom)(modalScope);
      bodyDom.append(modalDom);

      openState = true;
      $rootScope.modal = {isOpen: openState};

      // Dismiss modal on "escape" key
      $document.bind("keydown", function (evt) {
        if (evt.which === 27) {
          $rootScope.$apply(function() {
            modalInstance.dismiss("esc");
          });
        }
      });

      return modalInstance;

    }
  };
};
