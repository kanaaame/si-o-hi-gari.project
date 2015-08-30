'use strict';

angular.module('siohigariApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'app/app.html'
      });
  });
