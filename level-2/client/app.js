/* global angular, require */

'use strict';

angular
  .module('Soapbox', [
    require('./components/navigation').name,
    require('./app-controller').name
  ])
  .constant('version', require('../package.json').version);
