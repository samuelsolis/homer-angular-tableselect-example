// app.js
angular.module('sortApp', [])

    .controller('mainController', function($scope) {
        $scope.sortType     = 'asiento'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchFish   = '';     // set the default search/filter term

        // create the list of sushi rolls
        $scope.sushi = [
            { asiento: 'Silla', cerveza: 'Cruzcampo', comida: 1 },
            { asiento: 'Sillón', cerveza: 'Mahou', comida: 2 },
            { asiento: 'Sofá', cerveza: 'Alhambra', comida: 5 },
            { asiento: 'Sillón máquina del tiempo', cerveza: 'Yuste', comida: 10 }
        ];

    });