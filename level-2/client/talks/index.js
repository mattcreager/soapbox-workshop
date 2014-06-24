/* global angular, module, require */

'use strict';

module.exports = angular
  .module('sb.talks', [
    require('./detail').name,
    require('./add').name
  ]);
