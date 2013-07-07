'use strict';

angular.module('rajnikanthApp')
  .service('searchService', function searchService($timeout, $q, $rootScope) {
		var GAPI = 'AIzaSyC8G6B8zaccTOSQEtkdG9_SvDjYBXiEFqs';

		/**
		 * Searches youtube database for given query
		 *
		 * @param query
		 * @param nPageToken
		 * @returns {*|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|Function|promise|Function|Function|promise|Function|Function|promise|Function|Function|promise|promiseContainer.promise|promise|Q.promise|Function|Function|Function|Function|Function}
		 */
		var searchYouTube = function(query, nPageToken) {
			var youTubeDataDeferred = $q.defer();

			var requestOptions = {
				part: 'snippet',
				maxResults: 10
			}

			if(nPageToken) {
				requestOptions.pageToken = nPageToken;
			} else if(query) {
				requestOptions.q = query;
			}

			console.log(requestOptions);

			gapi.client.load('youtube', 'v3', function() {
				gapi.client.setApiKey(GAPI);
				console.log(requestOptions.query)
				var request = gapi.client.youtube.search.list(requestOptions);
				request.execute(function(response) {
					$rootScope.$apply(function() {
						youTubeDataDeferred.resolve(response.result);
					});
				});
			});

			return youTubeDataDeferred.promise;
		};

		/**
		 * Publicly accessible API
		 */
		return {
			youTube: function(query, nPageToken) {
				return searchYouTube(query, nPageToken);
			}
		};
  });
