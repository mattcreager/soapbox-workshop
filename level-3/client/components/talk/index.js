/* global angular, module, require */

'use strict';

module.exports = angular
  .module('sb.talk', [])
  .factory('talkCollection', require('./talk-collection.js').factory);
