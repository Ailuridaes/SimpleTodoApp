(function() {
    'use strict';

    angular
        .module('app')
        .value('taskUrl', "http://localhost:50934/api/tasks");
})();
