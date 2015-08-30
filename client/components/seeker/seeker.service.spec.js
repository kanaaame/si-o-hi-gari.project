'use strict';

describe('Service: seeker', function () {

  // load the service's module
  beforeEach(module('siohigariApp'));

  // instantiate service
  var seeker;
  beforeEach(inject(function (_Seeker_) {
    seeker = _Seeker_;
  }));

  it('should do something', function () {
    expect(!!seeker).toBe(true);
  });

});
