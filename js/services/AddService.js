app.factory('AddService', function($http) {
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	function postData(snippet) {
		var request = $http({
			method: "POST",
			url: "http://zodasmooi.nl/caine/api/snipper/v1/add.php",
			data: {
				add: true,
				title: snippet.title,
				language: snippet.language,
				version: snippet.version,
				code: snippet.code
			}
		});

		return request;
	}

	return {
		postData: postData
	}
});