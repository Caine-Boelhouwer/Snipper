app.controller('OverviewCtrl', function($scope, OverviewService, DeleteService, ngToast) {
	// Init vars
	$scope.searchBar;
	$scope.snippets;

	// Get all snippet data from overview service and put response in scope var
   	OverviewService.getData()
		.success(function(response) {
	        $scope.snippets = response;
	    }).error(function(error) {
	        console.log(error);
	    })

	// Delete snippet function
	$scope.deleteSnippet = function(snippet) {
		// Execute postdata function with snippet as param to delete snippet
		DeleteService.postData(snippet)
			.then(function (response) {
				console.log(response);
				// Remove snippet from the overview list after delete is success
				var index = $scope.snippets.indexOf(snippet);
				$scope.snippets.splice(index, 1);
				ngToast.create('<strong>'+snippet.title+'</strong> is verwijderd.'); // Create toast
			}, function (error) {
				console.log(error);
			});
	}
});