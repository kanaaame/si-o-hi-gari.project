'use strict';

angular.module('siohigariApp')
  .factory('Community', ['$resource',
    function ($resource) {
      return $resource('/api/seekers/:seekerId/communities', {userId:'@_id'}, {
        query: {method: 'GET', cache: false, isArray: true}
      });
    }
  ]);
