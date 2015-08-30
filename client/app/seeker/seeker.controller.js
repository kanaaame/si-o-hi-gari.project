'use strict';

angular.module('siohigariApp')
  .controller('SeekerCtrl', ['$state', 'seekers',
    function ($state, seekers) {
      var _this = this;
      _this.seekers = seekers;
    }
  ]);
