(function() {
    'use strict';

    angular
        .module('app')
        .factory('taskFactory', taskFactory);

    taskFactory.$inject = ['$http'];

    /* @ngInject */
    function taskFactory($http) {
        var service = {
            getTasks: getTasks($http)
        };

        return service;

        function getTasks($http) {
            return $http.get("http://localhost:50934/api/tasks").then(
                function(res) {
                    return res.data;
                });
        }
    }
})();
