/* global angular, require */

'use strict';

angular
  .module('Soapbox', [])
  .constant('version', require('../package.json').version);
