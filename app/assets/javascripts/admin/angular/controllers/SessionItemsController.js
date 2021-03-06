angular
  .module('votweb.controllers')
  .controller('SessionItemsController', ['$scope', '$window', 'NgTableService', function($scope, $window, NgTableService) {
    $scope.NgTableService = NgTableService;

    $scope.init = function(config) {
      $scope.filters  = config.filter;
      $scope.tableParams = $scope.NgTableService.init({
        page: config.page,
        count: config.count,
        sorting: Object.keys(config.sorting || {}).length > 0 ? config.sorting : { 'session_items.created_at': 'desc' },
        filter: $scope.filters,
        url: $window.localizedPath('admin_session_items')
      });
    };
  }]);
