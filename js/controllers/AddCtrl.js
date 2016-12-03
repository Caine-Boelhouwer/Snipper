app.controller('AddCtrl', function($scope, $routeParams, AddService, ngToast) {
	// Create snippet
	$scope.createSnippet = function(snippet) {
    	AddService.postData(snippet)
			.then(function (response) {
				console.log(response);
				ngToast.create('<strong>'+snippet.title+'</strong> is aangemaakt.');
			}, function (error) {
				console.log(error);
			});
	}
});