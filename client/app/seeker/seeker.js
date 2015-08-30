'use strict';

angular.module('siohigariApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.seeker', {
        url: '/seekers',
        views: {
          'content@app': {
            templateUrl: 'app/seeker/seeker.html',
            controller: 'SeekerCtrl',
            controllerAs: 'ctrl',
          }
        },
        resolve: {
          seekers: ['Seeker', function(Seeker) {
            return Seeker.query();
          }]
        }
      })
      .state('app.seeker.detail', {
        url: '/:seekerId',
        views: {
          'content@app': {
            templateUrl: 'app/seeker/detail/detail.html',
            controller: 'SeekerDetailCtrl',
            controllerAs: 'ctrl',
          }
        },
        resolve: {
          seeker: ['$stateParams', 'Seeker', function($stateParams, Seeker) {
            return Seeker.get({seekerId:$stateParams.seekerId});
          }],
          tweets: ['$stateParams', 'Tweet', function($stateParams, Tweet) {
            return Tweet.query({seekerId:$stateParams.seekerId});
          }],
          communities: ['$stateParams', 'Community', function($stateParams, Community) {
            return Community.query({seekerId:$stateParams.seekerId});
          }]
        }
      });
  });
