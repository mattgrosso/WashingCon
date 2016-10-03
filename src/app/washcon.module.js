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
      })
      .state('sponsors', {
        url: '/sponsors',
        templateUrl: 'sponsors/sponsors.template.html',
        controller: 'SponsorsController',
        controllerAs: 'sponsors'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.template.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.template.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('location', {
        url: '/location',
        templateUrl: 'location/location.template.html',
        controller: 'LocationController',
        controllerAs: 'location'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'registration/registration.template.html',
        controller: 'RegistrationController',
        controllerAs: 'registration'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'events/events.template.html',
        controller: 'EventsController',
        controllerAs: 'events'
      });
  }

})();
