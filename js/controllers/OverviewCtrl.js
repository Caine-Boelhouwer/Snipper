app.controller('OverviewCtrl', function($scope, OverviewService, DeleteService, ngToast) {
	// Init vars
	$scope.searchBar;
	$scope.snippets;

	// Get snippet data
   	OverviewService.getData()
		.success(function(response) {
	        $scope.snippets = response;
	    }).error(function(error) {
	        console.log(error);
	    })

	// Delete snippet
	$scope.deleteSnippet = function(snippet) {
		DeleteService.postData(snippet)
			.then(function (response) {
				console.log(response);
				var index = $scope.snippets.indexOf(snippet);
				$scope.snippets.splice(index, 1);
				ngToast.create('<strong>'+snippet.title+'</strong> is verwijderd.');
			}, function (error) {
				console.log(error);
			});
	}
});