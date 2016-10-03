(function() {
  'use strict';

  angular
    .module('washcon', ['ui.router'])
    .config(washconConfig);

  washconConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function washconConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.template.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('getinvolved', {
        url: '/getinvolved',
        templateUrl: 'getinvolved/getinvolved.template.html',
        controller: 'GetInvolvedController',
        controllerAs: 'getinvolved'
      });
  }

})();
