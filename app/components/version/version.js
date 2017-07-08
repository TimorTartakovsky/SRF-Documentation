'use strict';

angular.module('myApp.version', [
  'documentation_srf.version.interpolate-filter',
  'documentation_srf.version.version-directive'
])

.value('version', '0.1');
