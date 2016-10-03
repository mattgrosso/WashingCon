(function() {
  'use strict';

  angular
    .module('washcon', ['ui.router'])
    .config(washconConfig);

  washconConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function washconConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  }

})();
