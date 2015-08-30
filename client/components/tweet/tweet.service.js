'use strict';

angular.module('siohigariApp')
  .factory('Tweet', ['$resource',
    function ($resource) {
      return $resource('/api/seekers/:seekerId/tweets/:id', {}, {
        query: {method: 'GET', cache: false, isArray: true},
        get: {method: 'GET', cache: false, isArray: false}
      });
    }
  ]);
