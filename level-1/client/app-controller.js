/* global angular, module */

'use strict';

module.exports = angular.module('sb.controllers', [])
  .controller('AppCtrl', function($scope) {
    $scope.challengeComplete = 'Totally';
  });
