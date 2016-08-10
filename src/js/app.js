(function(){
  var app = angular.module('app', []);

  app.controller('TodoController', function(){
    var ctrl = this;
    ctrl.todoList = [];

    ctrl.priorityOptions = [
      {name: "High",
      order: 1},
      {name: "Medium",
      order: 2},
      {name: "Low",
      order: 3}
    ];

    ctrl.newTodo = {};

    ctrl.addTodo = function() {
      ctrl.todoList.push(ctrl.newTodo);
      ctrl.newTodo = {};
    };

    ctrl.removeTodo = function(todo) {
      var index = ctrl.todoList.indexOf(todo);
      return index>-1 ? ctrl.todoList.splice(index, 1) : [];
    };
  });

})();
