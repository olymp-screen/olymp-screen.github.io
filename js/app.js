function sortTogether(array1, array2) {
    var merged = [];
    for(var i=0; i<array1.length; i++) { merged.push({'a1': array1[i], 'a2': array2[i]}); }
    merged.sort(function(o1, o2) { return ((o1.a1 > o2.a1) ? -1 : ((o1.a1 == o2.a1) ? 0 : 1)); });
    for(var i=0; i<merged.length; i++) { array1[i] = merged[i].a1; array2[i] = merged[i].a2; }
}

var database = {
	// Результати шкіл в районі
	inPlaces: [
		[0, 0, 0, 0, 0, 0], // 1 місця
		[2, 0, 0, 0, 0, 0], // 2 місця
		[5, 1, 1, 0, 0, 0] // 3 місця
	],
	pPlaces: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	inRate: [0.857, 0.071, 0.071, 0, 0, 0],
	inTeams: ["Школа №5", "Школа №3", "Боромлянський НВК", "Школа №2", "Школа №4", "Гребениківська ЗОШ"],
	
	regRate: [0.268, 0.161, 0.092, 0.109, 0.052, 0.019, 0.057, 0.025, 0.01, 0.036, 0.029, 0.034, 0.013, 0.023, 0.006, 0.006, 0.004, 0.004, 0.008, 0.006, 0, 0.002, 0.004, 0.002, 0.013, 0.01, 0.004],
	regTeams: ["м.Суми", "м.Шостка", "м.Конотоп", "Кролевецький район", "Кадетський корпус", "Білопільський район",
			   "м.Ромни", "Липоводолинський район", "Сумська обл. гімн. для обдар.", "м.Охтирка", "Тростянецький район", 
			   "Серединобудський район", "Конотопський район", "м.Глухів", "м.Лебедин", "Ямпільський район", 
			   "Роменський район", "Краснопільський район", "Буринський район", "Великописарівський район", "Сумський район", 
			   "Глухівський район", "Лебединський район", "Недригайлівський район", "Охтирський район", "Шосткінський район", 
			   "Путивльський район"]
};

sortTogether(database.regRate, database.regTeams);
sortTogether(database.inRate, database.inTeams);

var option1 =  {
    chart: { type: 'bar', animation: 'false' },
    title: { text: '' },
    xAxis: { categories: database.inTeams },
    yAxis: { title: { text: ''}, max: 10, allowDecimals: false },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'І місце',   data: database.inPlaces[0] }, 
		{ name: 'ІІ місце',  data: database.inPlaces[1] }, 
		{ name: 'ІІІ місце', data: database.inPlaces[2] }
	]
};

var option2 =  {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: { categories: ["Школа №5", "Школа №3", "Боромлянський НВК", "Школа №2", "Школа №4"] },
    yAxis: { title: { text: ''}, max: 1 },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'Рейтинг', data: database.inRate }
	]
};

var option3 =  {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: { categories: ['Куліков', 'Андрущенко', 'Батраченко', 'Кірнос', 'Ковальчук',
                        'Красніков', 'Тарасенко', 'Трусов', 'Холодько'] },
    yAxis: { title: { text: ''}, max: 5, allowDecimals: false },
    plotOptions: { series: { stacking: 'normal' } },
	series : [
		{ name: 'І місце',   data: database.pPlaces[0] }, 
		{ name: 'ІІ місце',  data: database.pPlaces[1] }, 
		{ name: 'ІІІ місце', data: database.pPlaces[2] }
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
		{ name: 'Холодько Оксана', school: 'СШ №5', subject: 'Інформаційні технології', place: 'III' },
		{ name: 'Батраченко Владислав', school: 'СШ №5', subject: 'Математика', place: 'III' },
		{ name: 'Красніков Андрій', school: 'СШ №3', subject: 'Математика', place: 'III' },
        { name: 'Ковальчук Юлія', school: 'СШ №5', subject: 'Біологія', place: 'III'},
        { name: 'Куліков Денис', school: 'СШ №5', subject: 'Біологія', place: 'II'},
        { name: 'Андрущенко Юлія', school: 'СШ №5', subject: 'Біологія', place: 'III'},
        { name: 'Куліков Денис', school: 'СШ №5', subject: 'Інформатика', place: 'II'},
        { name: 'Трусов Богдан', school: 'СШ №5', subject: 'Інформатика', place: 'III'},
        { name: 'Кірнос Сергій', school: 'Боромлянський НВК', subject: 'Інформатика', place: 'III'},
        { name: 'Тарасенко Світлана', school: 'СШ №5', subject: 'Географія', place: 'III'}
	];
});
