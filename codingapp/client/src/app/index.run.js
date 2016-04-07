(function() {
  'use strict';

  angular
    .module('codingclient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
