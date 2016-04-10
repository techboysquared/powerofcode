(function() {
  'use strict';

  angular
    .module('codingclient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

  angular
    .module('codingclient').directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
        templateUrl: "app/header.html",
        controller: ['$scope', '$filter', 'Auth', function ($scope, $filter, Auth) {
            $scope.Auth = Auth;
            $scope.userDialogOpen = false;
            $scope.toggleUserMenu = function()
            {
              $scope.userDialogOpen = !$scope.userDialogOpen;
            }
            $scope.logout= function()
            {
              Auth.logout();
              $scope.userDialogOpen = false;

            }
            /*$scope.$watch(Auth.logg,function () {
                $scope.Auth = Auth
            })*/
        }]
    }
});


})();
