(function() {
    'use strict';

    angular
        .module('app')
        .factory('taskFactory', taskFactory);

    taskFactory.$inject = ['$http'];

    /* @ngInject */
    function taskFactory($http) {
        var service = {
            getTasks: getTasks($http),
            addTask: addTask
        };

        return service;

        function getTasks($http) {
            return $http({
                method: 'GET',
                url: "http://localhost:50934/api/tasks"
            }).then(
                function(res) {
                    return res.data;
                }, function(res) {
                    return res;
                }
            );
        }

        function addTask(task) {
            return $http({
                method: 'POST',
                url: "http://localhost:50934/api/tasks",
                data: task
            }).then(
                function(res) {
                    return angular.fromJson(res.data);
                }, function(res) {
                    return res;
                }
            );
        }
    }
})();
