'use strict';

angular.module('siohigariApp')
  .controller('SeekerDetailCtrl', ['$state', '$stateParams', 'seeker', 'tweets', 'communities',
    function ($state, $stateParams, seeker, tweets, communities) {
      var _this = this;
      _this.seeker = seeker;
      _this.tweets = tweets;
      _this.communities = communities;
    }
  ]);
