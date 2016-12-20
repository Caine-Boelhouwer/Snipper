import app from '../app';

app.controller('OverviewCtrl', function($scope, OverviewService, DeleteService, ngToast) {
	// Init vars
	$scope.searchBar;
	$scope.snippets;

	// Event is completed
	document.body.addEventListener('getDataOverview:completed', function(e) {
		$scope.snippets = e.detail.data;
	});

	// Get all snippet data from overview service and put response in scope var
	OverviewService.getData();

	// Delete snippet function
	$scope.deleteSnippet = function(snippet) {

		// Event completed
		document.body.addEventListener('postDataDelete:completed', function(e) {
			// When add is success; create toast and remove item from screen
			if(e.detail.status == 200) {
				var index = $scope.snippets.indexOf(snippet);
				$scope.snippets.splice(index, 1);

				ngToast.dismiss();
				ngToast.create('<strong>'+snippet.title+'</strong> is verwijderd.');
			}
		});

		// Execute postdata function with snippet as param to delete snippet
		DeleteService.postData(snippet);
	}
});