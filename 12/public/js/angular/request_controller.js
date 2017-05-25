app.controller('RequestController', function($scope, $http){
	$scope.requestForm;
	$scope.request = {};
	$scope.sent = false;
	$scope.error = false;
	$scope.buttonDisabled = false;

	$scope.sendRequest = function(request){
		$scope.buttonDisabled = true;
		if ($scope.requestForm.$valid) {
			$http.post('https://mandrillapp.com/api/1.0/messages/send.json', 
								  { 
							   		key: 'tFAVxFneJNd7m3bYQGwb0Q',
							   		message: {
							   		            from_email: 'contato@dados.al.gov.br',
							   		            to: [
							   		            	{
							   		                email: 'lucas.cavalcante@seplande.al.gov.br',
							   		                name: 'Lucas Cavalcante',
							   		                type: 'to'
							   		              },
							   		              {
							   		                email: 'bruno.rocha@seplande.al.gov.br',
							   		                name: 'Bruno Rocha',
							   		                type: 'to'
							   		              }
							   		            ],
							   		            autotext: 'true',
							   		            subject: 'Solicitação de dado',
							   		            html: '<h3>Dados do solicitante</h3><p>Nome: ' + request.nome + '</p><p>E-mail: ' + request.email + '</p><p>Telefone: ' + request.telefone + '</p><p>CPF/CNPJ: ' + request.cpf_cnpj + '</p><p>Escolaridade: ' + request.escolaridade + '</p><p>Profissão: ' + request.profissao + '</p><p>Solicitação: ' + request.solicitacao + '</p>'
							   		          } 
								  }).success(function(data, status, headers, config) {
								  	$scope.buttonDisabled = false;
								  	$scope.sent = true;
								  	$scope.request = {};
								  }).
								  error(function(data, status, headers, config) {
								  	$scope.buttonDisabled = false;
								    $scope.error = true;
								  });
		} else {
			$scope.buttonDisabled = false;
			$scope.error = true;
		}
	};
});