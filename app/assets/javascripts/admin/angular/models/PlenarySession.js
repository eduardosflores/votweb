angular
  .module('votweb.models')
  .service('PlenarySession', ['$http', '$window', function($http, $window) {
    this.details = function(plenarySessionID) {
      return $http.get($window.localizedPath('admin_plenary_session', plenarySessionID));
    };

    this.checkMembersAttendance = function(plenarySessionID) {
      return $http.post($window.localizedPath('check_members_attendance_admin_plenary_session_session_managements', plenarySessionID));
    };

    this.lockSubscriptions = function(plenarySessionID) {
      return $http.patch($window.localizedPath('admin_plenary_session', plenarySessionID), { plenary_session: { is_subscriptions_locked: true } });
    };

    this.unlockSubscriptions = function(plenarySessionID) {
      return $http.patch($window.localizedPath('admin_plenary_session', plenarySessionID), { plenary_session: { is_subscriptions_locked: false } });
    };
  }]);
