import app from '../app';

app.controller('AddCtrl', function($scope, $routeParams, AddService, ngToast) {
	
	// Create snippet function
	$scope.createSnippet = function(snippet) {

		// Event completed
		document.body.addEventListener('postDataAdd:completed', function(e) {
			// When add is success; create toast
			if(e.detail.status == 200) {
				ngToast.dismiss();
				ngToast.create('<strong>'+snippet.title+'</strong> is aangemaakt.');
			}
		});

		// Execute postdata function with snippet as param to add snippet
		AddService.postData(snippet);
	}
});