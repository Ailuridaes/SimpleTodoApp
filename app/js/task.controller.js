(function() {
    angular.module('app').controller('TaskController', TaskController);

    TaskController.$inject = ['taskFactory', '$filter', '$q'];

    function TaskController(taskFactory, $filter, $q) {
        var ctrl = this;
        ctrl.taskList = [];
        ctrl.newTask = {};
        ctrl.addTask = addTask;
        ctrl.removeTask = removeTask;
        ctrl.updateTask = updateTask;
        ctrl.completeTask = completeTask;
        ctrl.orderTasks = orderTasks;
        ctrl.priorityOptions = ["High", "Medium", "Low"];

        activate();

        function activate() {
            taskFactory.getTasks.then(
                function(data) {
                    ctrl.taskList = data;
                },
                function(responseMsg) {
                    //TODO: add error message
                }
            );
        }

        function addTask(newTask) {
            taskFactory.addTask(newTask).then(
                function(task) {
                    ctrl.taskList.push(task);
                },
                function(errorMsg) {
                    //TODO: add error message
                }
            );
        }

        function removeTask(task) {
            taskFactory.deleteTask(task).then(
                function(res) {
                    var index = ctrl.taskList.indexOf(task);
                    return index > -1 ? ctrl.taskList.splice(index, 1) : [];
                },
                function(error) {
                    //TODO: add error handling
                }
            );
        }

        function updateTask(task){
            var defer = $q.defer();

            taskFactory.updateTask(task).then(
                function(res){
                    defer.resolve(res);
                }, function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );

            return defer.promise;
        }

        function completeTask(task, isIncomplete) {
            task.isCompleted = !isIncomplete;
            updateTask(task).then(
                function() {
                    return;
                }, function(error) {
                    task.isCompleted = isIncomplete;
                }
            );
        }

        function orderTasks(sortOption) {
            ctrl.taskList = $filter('orderBy')(ctrl.taskList, sortOption);
        }

    }
})();
