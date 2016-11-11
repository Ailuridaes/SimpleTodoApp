describe('taskFactory', function(){

  beforeEach(function(){
    bard.appModule('app');
    bard.inject('taskFactory', 'taskUrl', '$httpBackend');
  });

  // GETALL
  describe('when getTasks is called', function(){
    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenGET(taskUrl)
        .respond(response);

      taskFactory.getTasks().then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenGET(taskUrl)
        .respond(500);

      taskFactory.getTasks().then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // ADD
  describe('when addTask is called', function(){
    var task = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenPOST(taskUrl + task)
        .respond(response);

      taskFactory.addTask(task).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenPOST(taskUrl + task)
        .respond(500);

      taskFactory.addTask(task).then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // REMOVE
  describe('when deleteTask is called', function(){
    var task = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenDELETE(taskUrl + task)
        .respond(response);

      taskFactory.deleteTask(task).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenDELETE(taskUrl + task)
        .respond(500);

      taskFactory.deleteTask(task).then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // UPDATE
  describe('when updateTask is called', function(){
    var task = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenPUT(taskUrl + task)
        .respond(response);

      taskFactory.updateTask(task).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenPUT(taskUrl + task)
        .respond(500);

      taskFactory.updateTask(task).then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

});
