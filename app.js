var app = angular.module('Monitor', ['ui.bootstrap']);

app.controller('Tabs', function ($scope, $window) {
  $scope.build1 = function() {
    setTimeout(function() { 
		var data = {
			labels: ["Школа №3", "Школа №5", "Школа №1", "Школа №2", "Школа №4", "Боромлянська", "Білківська"],
			datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(131,137,255,0.5)",
					strokeColor: "rgba(0,0,255,0.8)",
					highlightFill: "rgba(131,137,255,0.75)",
					highlightStroke: "rgba(131,137,255,1)",
					data: [100, 66, 0, 0, 0, 0, 0]
				}
			]
		};
		var ctx = document.getElementById("myChart").getContext("2d");
		var myBarChart = new Chart(ctx).Bar(data, {});
    });
  };
});