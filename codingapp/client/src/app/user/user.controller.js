(function() {
  'use strict';

  angular
    .module('codingclient')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController() {
  		var vm = this;
  		vm.username = "@techboysquared";
  		vm.location = "New York, NY";
  		vm.joindate = "March 3rd, 2015"
  }
})();
