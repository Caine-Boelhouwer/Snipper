import app from '../app';

app.factory('DeleteService', function($http) {

	// Set default post header
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	// Post data to delete snippet
	function postData(snippet) {
		$http({
			method: "POST",
			url: "http://zodasmooi.nl/caine/api/snipper/v1/delete.php",
			data: {
				delete: true,
				id: snippet.id
			}
		}).then(function successCallback(response) {
			const event = new CustomEvent('postDataDelete:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		}, function errorCallback(response) {
			const event = new CustomEvent('postDataDelete:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		});
	}

	return {
		postData: postData
	}
});