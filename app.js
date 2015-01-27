var app = angular.module('Monitor', ['ui.bootstrap']);

app.controller('Tabs', function ($scope, $window) {
  $scope.build = function(chartNum) {
    setTimeout(function() { 
		var data1 = {
			labels: ["Школа №5", "Школа №3", "Школа №1", "Школа №2", "Школа №4", "Боромлянська", "Білківська"],
			datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(131,137,255,0.5)",
					strokeColor: "rgba(0,0,255,0.8)",
					highlightFill: "rgba(131,137,255,0.75)",
					highlightStroke: "rgba(131,137,255,1)",
					data: [2, 1, 0, 0, 0, 0, 0]
				}
			]
		};
		
		var data2 = {
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
		
		if (chartNum == 1) {
			var ctx = document.getElementById("myChart1").getContext("2d");
			var myBarChart = new Chart(ctx).Bar(data1, {});
		} 
		if (chartNum == 2) {
			var ctx = document.getElementById("myChart2").getContext("2d");
			var myBarChart = new Chart(ctx).Bar(data2, {});
		}
    });
  };
});