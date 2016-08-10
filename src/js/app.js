(function(){
  var app = angular.module('app', []);

  app.controller('TodoController', function(){
    var ctrl = this;
    ctrl.todoList = [];

    ctrl.priorityOptions = [
      {name: "High",
      priority: 1},
      {name: "Medium",
      priority: 2},
      {name: "Low",
      priority: 3}
    ];

    ctrl.newTodo = {};

    ctrl.addTodo = function() {
      ctrl.todoList.push(ctrl.newTodo);
      ctrl.newTodo = {};
    };

    ctrl.removeTodo = function(todo) {
      var index = ctrl.todoList.indexOf(todo);
      return index>-1 ? ctrl.todoList.splice(index, 1) : [];
    }
  });

})();
