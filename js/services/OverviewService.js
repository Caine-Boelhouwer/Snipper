app.factory('OverviewService', function($http) {
	function getData() {
		return $http.get('http://zodasmooi.nl/caine/api/snipper/v1/');
	}

	return {
		getData: getData
	}
});