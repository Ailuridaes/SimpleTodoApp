(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    /* @ngInject */
    function todoFactory($http) {
        var service = {
            getTestTodos: getTestTodos($http)
        };

        return service;

        function getTestTodos($http) {
          return $http.get("/data/testTodos.json").then(function(res){
              return res.data;
          });
        }
    }
})();
