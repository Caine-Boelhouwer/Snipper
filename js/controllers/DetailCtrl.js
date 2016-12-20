import app from '../app';

app.controller('DetailCtrl', function($scope, $routeParams, DetailService) {
	
	// Event is completed
	document.body.addEventListener('getDataDetail:completed', function(e) {
		$scope.detailSnippet = e.detail.data;
	});

	// Get snippet data with routing id from detail service and put response in scope var
	DetailService.getData($routeParams.id);
});