import app from '../app';

app.factory('OverviewService', function($http) {

	// Get all snippet data
	function getData() {
		$http({
			method: 'GET',
			url: 'http://zodasmooi.nl/caine/api/snipper/v1/'
		}).then(function successCallback(response) {
			const event = new CustomEvent('getDataOverview:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		}, function errorCallback(response) {
			const event = new CustomEvent('getDataOverview:completed', { 'detail': response });
			document.body.dispatchEvent(event);
		});
	}

	return {
		getData: getData
	}
});