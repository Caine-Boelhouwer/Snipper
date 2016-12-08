app.factory('OverviewService', function($http) {

	// Get all snippet data
	function getData() {
		return $http.get('http://zodasmooi.nl/caine/api/snipper/v1/');
	}

	return {
		getData: getData
	}
});