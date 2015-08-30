'use strict';

angular.module('siohigariApp')
  .factory('Seeker', ['$resource',
    function ($resource) {
      return $resource('/api/seekers/:seekerId', {userId:'@_id'}, {
        query: {method: 'GET', cache: false, isArray: true},
        get: {method: 'GET', cache: false, isArray: false}
  	  });
    }
  ]);
