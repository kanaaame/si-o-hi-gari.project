'use strict';

describe('Controller: SeekerDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('siohigariApp'));

  var SeekerDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeekerDetailCtrl = $controller('SeekerDetailCtrl', {
      $scope: scope,
      seeker: {},
      tweets: [],
      communities: []
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
