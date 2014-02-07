'use strict';

describe('ProjectsController', function() {
	  var $scope, controller;

	  beforeEach(module('suiviAt'));
	  beforeEach(inject(function ($rootScope, $controller) {
	    $scope = $rootScope.$new();
	    controller = $controller('ProjectsController', {
	      $scope: $scope
	    });
	  }));

	  it('should set save function', function() {
	    expect($scope.save).toBeDefined();
	  });
	});