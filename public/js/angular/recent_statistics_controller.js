app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);

app.controller('RecentStatisticsController', function($scope, $http){
	$scope.recent_statistics;
	$scope.fetchData = function(){
		$http.get('http://200.199.87.106/api/recent_statistics.json')
				 	.success(function(data){
						$scope.recent_statistics = data;
					});
	};
});