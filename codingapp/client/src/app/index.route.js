(function() {
  'use strict';

  angular
    .module('codingclient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/view.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('lesson', {
        url: '/lesson',
        templateUrl: 'app/lesson/lesson.html',
        controller: 'LessonController',
        controllerAs: 'lesson'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
