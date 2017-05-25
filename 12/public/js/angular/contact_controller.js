app.controller('ContactController', function($scope, $http){
	$scope.contactForm;
	$scope.contact = {};
	$scope.sent = false;
	$scope.error = false;
	$scope.buttonDisabled = false;

	$scope.sendContact = function(contact){
		if ($scope.contactForm.$valid) {
			$scope.buttonDisabled = true;
			$http.post('https://mandrillapp.com/api/1.0/messages/send.json', 
								  { 
							   		key: 'tFAVxFneJNd7m3bYQGwb0Q',
							   		message: {
							   		            from_email: 'contato@dados.al.gov.br',
							   		            to: [
							   		              {
							   		                email: 'bruno.rocha@seplande.al.gov.br',
							   		                name: 'Bruno Rocha',
							   		                type: 'to'
							   		              },
							   		              {
							   		                email: 'lucas.cavalcante@seplande.al.gov.br',
							   		                name: 'Lucas Cavalcante',
							   		                type: 'to'
							   		              }
							   		            ],
							   		            autotext: 'true',
							   		            subject: contact.subject,
							   		            html: contact.namee + ' escreveu:<br><p>' + contact.message + '</p><br><p>' + contact.email + '</p>'
							   		          } 
								  }).success(function(data, status, headers, config) {
								  	$scope.buttonDisabled = false;
								  	$scope.contact = {};
								  	$scope.sent = true;
								  }).
								  error(function(data, status, headers, config) {
								  	$scope.buttonDisabled = false;
								  });
		} else {
			$scope.buttonDisabled = false;
			$scope.error = true;
		}
	};
});