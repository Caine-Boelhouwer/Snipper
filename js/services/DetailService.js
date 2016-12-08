app.factory('DetailService', function($http) {

	// Get snippet detail data with id
	function getData(id) {
		return $http.get('http://zodasmooi.nl/caine/api/snipper/v1/detail.php?id='+id);
	}

	return {
		getData: getData
	}
});