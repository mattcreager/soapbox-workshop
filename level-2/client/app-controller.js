/* global angular, module */

'use strict';

module.exports = angular.module('sb.controllers', [])
  .controller('AppCtrl', function($scope) {
    $scope.$on('$stateChangeError', function(err) {
      console.log(err);
    });
  });
