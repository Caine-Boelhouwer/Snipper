app.controller('EditCtrl', function($scope, $routeParams, DetailService, EditService, ngToast) {
	
	// Get snippet data with routing id from detail service and put response in scope var
   	DetailService.getData($routeParams.id)
		.success(function(response) {
	        $scope.editSnippet = response;
	    }).error(function(error) {
	        console.log(error);
	    })

    // Update snippet function
    $scope.updateSnippet = function(snippet) {
    	// Execute postdata function with snippet as param to edit snippet
		EditService.postData(snippet)
			.then(function (response) {
				console.log(response);
				ngToast.create('<strong>'+snippet.title+'</strong> is aangepast.'); // Create toast
			}, function (error) {
				console.log(error);
			});
    }
});