'use strict';

angular.module('rajnikanthApp')
  .directive('whenScrolled', function () {
    return {
	    link: function postLink(scope, element, attrs) {
		    var raw = element[0];

		    window.onscroll = function() {
			    if(window.innerHeight + document.body.scrollTop >= document.body.offsetHeight) {
				    scope.$apply(attrs.whenScrolled);
			    }
		    };
	    }
    };
  });
