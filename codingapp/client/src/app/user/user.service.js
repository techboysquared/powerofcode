(function() {
  'use strict';

  angular
    .module('codingclient')
    .service('Auth', function() {
        this.username = "techboysquared";
        this.name = "Cody Short"
        var id = null;
        this.loggedIn = function(){
          return this.username == null ? false : true;
        }
        this.login = function(username, id)
        {

        }
        this.logout = function()
        {
          this.username = null;
          this.name = null;
          this.id = null;
        }

    })
})();