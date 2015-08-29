'use strict';

describe('Controller: SeekerCtrl', function () {

  // load the controller's module
  beforeEach(module('siohigariApp'));

  var SeekerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeekerCtrl = $controller('SeekerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
