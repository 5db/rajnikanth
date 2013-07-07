'use strict';

angular.module('rajnikanthApp')
  .controller('SearchCtrl', function ($scope, $routeParams, searchService) {
		$scope.search = function(query) {
			searchService.youTube(query).then(function(result) {
				$scope.videos = result.items;
				$scope.nextPageToken = result.nextPageToken;
			});
		};

		$scope.loadMore = function() {
			searchService.youTube(null, $scope.nextPageToken).then(function(result) {
				$scope.videos.push.apply($scope.videos, result.items);
				$scope.nextPageToken = result.nextPageToken;
			});
		};
  });
