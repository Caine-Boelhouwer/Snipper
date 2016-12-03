app.controller('EditCtrl', function($scope, $routeParams, DetailService, EditService, ngToast) {
	// Get snippet data
   	DetailService.getData($routeParams.id)
		.success(function(response) {
	        $scope.editSnippet = response;
	    }).error(function(error) {
	        console.log(error);
	    })

    // Update snippet
    $scope.updateSnippet = function(snippet) {
		EditService.postData(snippet)
			.then(function (response) {
				console.log(response);
				ngToast.create('<strong>'+snippet.title+'</strong> is aangepast.');
			}, function (error) {
				console.log(error);
			});
    }
});