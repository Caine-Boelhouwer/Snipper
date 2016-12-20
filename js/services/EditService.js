import app from '../app';

app.factory('EditService', function($http) {

	// Set default post header
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	// Post data to edit snippet
	function postData(snippet) {
		$http({
			method: "POST",
			url: "http://zodasmooi.nl/caine/api/snipper/v1/edit.php",
			data: {
				edit: true,
				id: snippet.id,
				title: snippet.title,
				language: snippet.language,
				version: snippet.version,
				code: snippet.code
			}
		}).then(function successCallback(response) {
			const event = new CustomEvent('postDataEdit:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		}, function errorCallback(response) {
			const event = new CustomEvent('postDataEdit:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		});
	}

	return {
		postData: postData
	}
});