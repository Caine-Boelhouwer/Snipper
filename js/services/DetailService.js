import app from '../app';

app.factory('DetailService', function($http) {

	// Get snippet detail data with id
	function getData(id) {
		$http({
			method: 'GET',
			url: 'http://zodasmooi.nl/caine/api/snipper/v1/detail.php?id='+id
		}).then(function successCallback(response) {
			const event = new CustomEvent('getDataDetail:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		}, function errorCallback(response) {
			const event = new CustomEvent('getDataDetail:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		});
	}

	return {
		getData: getData
	}
});