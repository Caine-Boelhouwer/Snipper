app.controller('DetailCtrl', function($scope, $routeParams, DetailService) {
	// Get snippet data
   	DetailService.getData($routeParams.id)
		.success(function(response) {
	        $scope.detailSnippet = response;
	    }).error(function(error) {
	        console.log(error);
	    })
});