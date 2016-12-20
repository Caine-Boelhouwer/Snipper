import app from '../app';

app.controller('EditCtrl', function($scope, $routeParams, DetailService, EditService, ngToast) {
	
	// Event is completed
	document.body.addEventListener('getDataDetail:completed', function(e) {
		$scope.editSnippet = e.detail.data;
	});

	// Get snippet data with routing id from detail service and put response in scope var
	DetailService.getData($routeParams.id);

    // Update snippet function
    $scope.updateSnippet = function(snippet) {

    	// Event completed
		document.body.addEventListener('postDataEdit:completed', function(e) {
			// When edit is success; create toast
			if(e.detail.status == 200) {
				ngToast.dismiss();
				ngToast.create('<strong>'+snippet.title+'</strong> is aangepast.');
			}
		});

		// Execute postdata function with snippet as param to edit snippet
		EditService.postData(snippet);
    }
});