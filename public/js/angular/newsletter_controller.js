app.controller('NewsletterController', function($scope, $http){
	$scope.newsletter;
	$scope.model = {};

	$scope.saveNewsletter = function(){
		if ($scope.newsletter.$valid) {
			$http({method: 'POST', url: 'http://200.199.87.106/api/newsletters.json', data: $scope.model})
			.success(function(){
				alert('Cadastrado com sucesso!');
			})
			.error(function(){
				alert('Tente novamente!');
			});
		}
	};
});