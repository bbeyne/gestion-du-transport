export class LibrairieMapsService {
    constructor() {

    }

    adresseAutoComplet($scope){
        $scope.query = "";
        $scope.query2 = "";
		$scope.paOptions = {
			updateModel : true
		};
		$scope.paTrigger = {};
		$scope.paDetails = {};
		$scope.placesCallback = function (error, details) {
			if (error) {
				return console.error(error);
			}
			$scope.paDetails = details;
		};

        $scope.finCallback = function (error, details) {
			if (error) {
				return console.error(error);
			}
			$scope.paDetails2 = details;
		};
    }
}
