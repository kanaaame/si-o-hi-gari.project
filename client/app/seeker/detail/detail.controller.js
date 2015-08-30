'use strict';

angular.module('siohigariApp')
  .controller('SeekerDetailCtrl', ['$state', '$stateParams', 'seeker', 'tweets',
    function ($state, $stateParams, seeker, tweets) {
      var _this = this;
      _this.seeker = seeker;
      _this.tweets = tweets;
    }
  ]);
