app.controller('DetailCtrl', function($scope, $routeParams, DetailService) {
	
	// Get snippet data with routing id from detail service and put response in scope var
   	DetailService.getData($routeParams.id)
		.success(function(response) {
	        $scope.detailSnippet = response;
	    }).error(function(error) {
	        console.log(error);
	    })
});