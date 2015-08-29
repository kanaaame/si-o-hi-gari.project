'use strict';

angular.module('siohigariApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('seeker', {
        url: '/seekers',
        templateUrl: 'app/seeker/seeker.html',
        controller: 'SeekerCtrl'
      });
  });