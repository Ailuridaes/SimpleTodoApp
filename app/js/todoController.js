(function(){
  angular.module('app').controller('TodoController', TodoController);

  TodoController.$inject = ['todoFactory'];

  function TodoController(todoFactory) {
    var ctrl = this;
    ctrl.todoList = [];
    ctrl.newTodo = {};
    ctrl.addTodo = addTodo;
    ctrl.removeTodo = removeTodo;
    ctrl.priorityOptions = [
      {name: "High",
      order: 1},
      {name: "Medium",
      order: 2},
      {name: "Low",
      order: 3}
    ];

    activate();

    function activate() {
      todoFactory.getTestTodos.then(function(data){
        ctrl.todoList = data;
      });
    }

    function addTodo() {
      ctrl.todoList.push(ctrl.newTodo);
      ctrl.newTodo = {};
    };

    function removeTodo(todo) {
      var index = ctrl.todoList.indexOf(todo);
      return index>-1 ? ctrl.todoList.splice(index, 1) : [];
    };

  }
})();
