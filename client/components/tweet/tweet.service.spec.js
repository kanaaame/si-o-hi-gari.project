'use strict';

describe('Service: tweet', function () {

  // load the service's module
  beforeEach(module('siohigariApp'));

  // instantiate service
  var tweet;
  beforeEach(inject(function (_Tweet_) {
    tweet = _Tweet_;
  }));

  it('should do something', function () {
    expect(!!tweet).toBe(true);
  });

});
