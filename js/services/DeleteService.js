app.factory('DeleteService', function($http) {
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
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