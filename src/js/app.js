(function(){
  var app = angular.module('app', ['as.sortable']);

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

    ctrl.dragControlOptions = {
    //containment: '#todoList',
    // accept: function (sourceItemHandleScope, destSortableScope) {return true}//override to determine drag is allowed or not. default is true.
    // itemMoved: function (event) {//Do what you want},
    // orderChanged: function(event) {//Do what you want},
    // clone: true, //optional param for clone feature.
    // allowDuplicates: false //optional param allows duplicates to be dropped.
    };

  });

})();
