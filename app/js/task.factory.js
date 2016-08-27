(function() {
    'use strict';

    angular
        .module('app')
        .factory('taskFactory', taskFactory);

    taskFactory.$inject = ['$http', 'taskUrl'];

    /* @ngInject */
    function taskFactory($http, taskUrl) {
        var service = {
            getTasks: getTasks($http),
            addTask: addTask,
            deleteTask: deleteTask,
            updateTask: updateTask
        };

        return service;

        function getTasks($http) {
            return $http({
                method: 'GET',
                url: taskUrl
            }).then(
                function(res) {
                    return res.data;
                }, function(res) {
                    return res.statusText;
                }
            );
        }

        function addTask(task) {
            return $http({
                method: 'POST',
                url: taskUrl,
                data: task
            }).then(
                function(res) {
                    // returns added task
                    return angular.fromJson(res.data);
                }, function(res) {
                    return res.data.message;
                    // has data.message AND res.statusText on 405 (not allowed)
                }
            );
        }

        function deleteTask(task) {
            return $http({
                method: 'DELETE',
                url: taskUrl + "/" + task.taskId
            }).then(
                function(res) {
                    // returns deleted task
                    return angular.fromJson(res.data);
                }, function(res) {
                    return res.statusText;
                    // res is 404 Not Found if taskId does not exist
                }
            );
        }

        function updateTask(task) {
            return $http({
                method: 'PUT',
                url: taskUrl + "/" + task.taskId,
                data: task
            }).then(
                function(res) {
                    // returns deleted task
                    return;
                }, function(res) {
                    return res.statusText;
                    // res is 404 Not Found if taskId does not exist, Bad Request if invalid task
                }
            );
        }
    }
})();
