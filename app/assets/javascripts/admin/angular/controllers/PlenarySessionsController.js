angular
  .module('votweb.controllers')
  .controller('PlenarySessionsController', ['$scope', '$window', 'NgTableService', function($scope, $window, NgTableService) {
    $scope.NgTableService = NgTableService;

    $scope.init = function(config) {
      $scope.filters  = config.filter;
      if (!$scope.filters.is_test) {
        $scope.filters.is_test = 'false';
      }

      $scope.tableParams = $scope.NgTableService.init({
        page: config.page,
        count: config.count,
        sorting: config.sorting,
        filter: $scope.filters,
        url: $window.localizedPath('admin_plenary_sessions')
      });
    };
  }]);
