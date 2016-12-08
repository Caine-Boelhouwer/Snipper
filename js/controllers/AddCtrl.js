app.controller('AddCtrl', function($scope, $routeParams, AddService, ngToast) {
	
	// Create snippet function
	$scope.createSnippet = function(snippet) {
		// Execute postdata function with snippet as param to add snippet
    	AddService.postData(snippet)
			.then(function (response) {
				console.log(response);
				ngToast.create('<strong>'+snippet.title+'</strong> is aangemaakt.'); // Create toast
			}, function (error) {
				console.log(error);
			});
	}
});