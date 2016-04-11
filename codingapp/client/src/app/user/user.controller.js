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
      vm.register = function(){
        alert("here");
      }
      vm.login = function(){
        alert("login");
      }
  }
})();
