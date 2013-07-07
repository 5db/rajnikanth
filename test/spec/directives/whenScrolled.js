'use strict';

describe('Directive: whenScrolled', function () {
  beforeEach(module('rajnikanthApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<when-scrolled></when-scrolled>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the whenScrolled directive');
  }));
});
