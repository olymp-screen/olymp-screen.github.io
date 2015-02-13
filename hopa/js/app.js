var app = angular.module('myModule', ['lumx']);

app.controller('List', function($scope) {
    $scope.schools = [
        "Тростянецька спеціалізована школа I-III ступенів №1",
        "Тростянецька спеціалізована школа I-III ступенів №2",
        "Тростянецька спеціалізована школа I-III ступенів №3",
        "Тростянецька загальноосвітня школа I-III ступенів №4",
        "Тростянецька спеціалізована школа I-III ступенів №5",
        "Боромлянський навчально-виховний комплекс: загальноосвітня школа І-ІІІ ступенів - дошкільний навчальний заклад"
    ];

    $scope.items = [
        { id: '1', name: 'Холодько Оксана',      school: $scope.schools[4],
            subject: 'Інформаційні технології', place: '3' },
        { id: '2', name: 'Батраченко Владислав', school: $scope.schools[4],
            subject: 'Математика', place: '3' },
        { id: '3', name: 'Красніков Андрій',     school: $scope.schools[2],
            subject: 'Математика', place: '3' },
        { id: '4', name: 'Ковальчук Юлія',       school: $scope.schools[4],
            subject: 'Біологія', place: '3'},
        { id: '5', name: 'Куліков Денис',        school: $scope.schools[4],
            subject: 'Біологія', place: '2'},
        { id: '6', name: 'Андрущенко Юлія',      school: $scope.schools[4],
            subject: 'Біологія', place: '3'},
        { id: '5', name: 'Куліков Денис',        school: $scope.schools[4],
            subject: 'Інформатика', place: '2'},
        { id: '7', name: 'Трусов Богдан',        school: $scope.schools[4],
            subject: 'Інформатика', place: '3'},
        { id: '8', name: 'Кірнос Сергій',        school: $scope.schools[5],
            subject: 'Інформатика', place: '3'},
        { id: '9', name: 'Тарасенко Світлана',   school: $scope.schools[4],
            subject: 'Географія', place: '3'},
        { id: '2', name: 'Батраченко Владислав', school: $scope.schools[4],
            subject: 'Математика', place: '3'},
        { id: '10', name: 'Дробітько Дарія',     school: $scope.schools[2],
            subject: 'Українська мова та література', place: '2'},
        { id: '11', name: 'Хоменко Владислава',  school: $scope.schools[2],
            subject: 'Українська мова та література', place: '3'},
        { id: '12', name: 'Храмцова Юлія',  school: $scope.schools[3],
            subject: 'Хімія', place: '3'},
        { id: '2', name: 'Батраченко Владислав',  school: $scope.schools[3],
            subject: 'Хімія', place: '3'},
        { id: '13', name: 'Рубан Єлизавета',  school: $scope.schools[3],
            subject: 'Хімія', place: '3'},
        { id: '6', name: 'Андрущенко Юлія',  school: $scope.schools[3],
            subject: 'Хімія', place: '3'},
        { id: '14', name: 'Протасова Альона',  school: $scope.schools[0],
            subject: 'Історія', place: '3'},
        { id: '15', name: 'Білик Ганна',  school: $scope.schools[5],
            subject: 'Історія', place: '3'},
        { id: '16', name: 'Симон Олексій',  school: $scope.schools[3],
            subject: 'Англійська мова', place: '3'}
    ];
});