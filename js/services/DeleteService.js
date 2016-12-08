app.factory('DeleteService', function($http) {

	// Set default post header
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	// Post data to delete snippet
	function postData(snippet) {
		var request = $http({
			method: "POST",
			url: "http://zodasmooi.nl/caine/api/snipper/v1/delete.php",
			data: {
				delete: true,
				id: snippet.id
			}
		});

		return request;
	}

	return {
		postData: postData
	}
});