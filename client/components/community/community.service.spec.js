'use strict';

describe('Service: community', function () {

  // load the service's module
  beforeEach(module('siohigariApp'));

  // instantiate service
  var community;
  beforeEach(inject(function (_Community_) {
    community = _Community_;
  }));

  it('should do something', function () {
    expect(!!community).toBe(true);
  });

});
