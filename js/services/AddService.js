import app from '../app';

app.factory('AddService', function($http) {
	
	// Set default post header
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	// Post data to add snippet
	function postData(snippet) {
		$http({
			method: "POST",
			url: "http://zodasmooi.nl/caine/api/snipper/v1/add.php",
			data: {
				add: true,
				title: snippet.title,
				language: snippet.language,
				version: snippet.version,
				code: snippet.code
			}
		}).then(function successCallback(response) {
			const event = new CustomEvent('postDataAdd:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		}, function errorCallback(response) {
			const event = new CustomEvent('postDataAdd:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		});
	}

	return {
		postData: postData
	}
});