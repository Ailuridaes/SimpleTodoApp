(function(){
  angular.module('app').controller('TaskController', TaskController);

  TaskController.$inject = ['taskFactory', '$filter'];

  function TaskController(taskFactory, $filter) {
    var ctrl = this;
    ctrl.taskList = [];
    ctrl.newTask = {};
    ctrl.addTask = addTask;
    ctrl.removeTask = removeTask;
    ctrl.orderTasks = orderTasks;
    ctrl.priorityOptions = ["High", "Medium", "Low"];

    activate();

    function activate() {
      taskFactory.getTasks.then(function(data){
        ctrl.taskList = data;
      });
    }

    function addTask() {
      ctrl.taskList.push(ctrl.newTask);
      ctrl.newTask = {};
    };

    function removeTask(task) {
      var index = ctrl.taskList.indexOf(task);
      return index>-1 ? ctrl.taskList.splice(index, 1) : [];
    };

    function orderTasks(sortOption) {
      ctrl.taskList = $filter('orderBy')(ctrl.taskList, sortOption);
    }

  }
})();
