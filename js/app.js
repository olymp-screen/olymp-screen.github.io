function sortTogether(array1, array2) {
    var merged = [];
    for(var i=0; i<array1.length; i++) { merged.push({'a1': array1[i], 'a2': array2[i]}); }
    merged.sort(function(o1, o2) { return ((o1.a1 > o2.a1) ? -1 : ((o1.a1 == o2.a1) ? 0 : 1)); });
    for(var i=0; i<merged.length; i++) { array1[i] = merged[i].a1; array2[i] = merged[i].a2; }
}

var database = {
	// Результати шкіл в районі
	inPlaces: [
		[0, 0, 0], // 1 місця
		[0, 0, 0], // 2 місця
		[2, 1, 0], // 3 місця
	],
	pPlaces: [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1]
	],
	inRate: [0.66, 0.33, 0],
	inTeams: ["Школа №5", "Школа №3", "Школа №4"],
	
	regRate: [0.174, 0.096, 0.084, 0.079, 0.045, 0.039, 0.028, 0.022, 0.017, 0.017, 
				0.011, 0.011, 0.011, 0.011, 0.006, 0.006, 0.006, 0.006, 0.006, 0, 0, 0, 0, 0, 0, 0, 0.326],
	regTeams: ["м.Шостка", "м.Конотоп", "Кролевецький район", "Кадетський корпус", "Білопільський район", 
			   "м.Ромни", "Липоводолинський район", "Сумська обл. гімн. для обдар.", "м.Охтирка", "Тростянецький район", 
			   "Серединобудський район", "Конотопський район", "м.Глухів", "м.Лебедин", "Ямпільський район", 
			   "Роменський район", "Краснопільський район", "Буринський район", "Великописарівський район", "Сумський район", 
			   "Глухівський район", "Лебединський район", "Недригайлівський район", "Охтирський район", "Шосткінський район", 
			   "Путивльський район", "м.Суми"
			   ], 				
}

sortTogether(database.regRate, database.regTeams);
sortTogether(database.inRate, database.inTeams);

var option1 =  {
    chart: { type: 'bar', animation: 'false' },
    title: { text: '' },
    xAxis: { categories: database.inTeams },
    yAxis: { title: { text: ''}, max: 5, allowDecimals: false },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'І місце',   data: database.inPlaces[0] }, 
		{ name: 'ІІ місце',  data: database.inPlaces[1] }, 
		{ name: 'ІІІ місце', data: database.inPlaces[2] },
	]
};

var option2 =  {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: { categories: ['Школа №5', 'Школа №3', 'Школа №4'] },
    yAxis: { title: { text: ''}, max: 1 },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'Рейтинг', data: database.inRate },
	]
};

var option3 =  {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: { categories: ['Холодько', 'Батраченко', 'Красніков'] },
    yAxis: { title: { text: ''}, max: 5, allowDecimals: false },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'І місце',   data: database.pPlaces[0] }, 
		{ name: 'ІІ місце',  data: database.pPlaces[1] }, 
		{ name: 'ІІІ місце', data: database.pPlaces[2] },
	]
};

var option4 =  {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: { 
		categories: database.regTeams
	},
    yAxis: { title: { text: ''}, max: 0.5 },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'Рейтинг', data: database.regRate },
	]
};

var app = angular.module('Monitor', ['ui.bootstrap']);

app.directive('highcharts', function() {
	return {
		link: function(scope, el, attrs) {
			var options;
			var chartData = scope.$eval(attrs.chartdata);
			if (chartData == 1) {
				options = option1;
			} else if(chartData == 2) {
				options = option2;
			} else if(chartData == 3) {
				options = option3;
			} else if(chartData == 4) {
				options = option4;
			}
			options.chart.renderTo = el[0];
			new Highcharts.Chart(options);
		}
	};
});

app.controller("Tabs", function($scope) {

});

app.controller('List', function($scope) {	
	$scope.items = [
		{ name: 'Холодько Оксана', school: 'СШ №5', subject: 'Інформаційні технології', place: 'third' },
		{ name: 'Батраченко Владислав', school: 'СШ №5', subject: 'Математика', place: 'third' },
		{ name: 'Красніков Андрій', school: 'СШ №3', subject: 'Математика', place: 'third' },
	];
});