describe('TaskController', function(){

  var taskController;
  var sandbox;

  beforeEach(function(){
    bard.appModule('app');
    bard.inject('$controller', '$q', '$rootScope', '$window', 'taskFactory');
  });

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    sinon.stub(taskFactory, 'getTasks').returns(
      $q.when([{},{},{}]));
    sinon.stub(taskFactory, 'addTask').returns(
      $q.when({title:"ResponseTask"}));
    sinon.stub(taskFactory, 'deleteTask').returns(
      $q.when());
    sinon.stub(taskFactory, 'updateTask').returns(
      $q.when());

    taskController = $controller('TaskController');
    $rootScope.$apply();
  });

  afterEach(function () {
    sandbox.restore();
  });


  bard.verifyNoOutstandingHttpRequests();

  it('should be created successfully', function(){
    expect(taskController).toBeDefined();
  });

  describe('after activating and calling getTasks()', function(){
    it('should have 3 objects in the array', function(){
      expect(taskController.taskList.length).toEqual(3);
    });
  });

  describe('after calling addTask', function(){
    it('should have the new response object in the array', function(){
      var newTask = {title: "NewTask"};
      taskController.addTask(newTask);

      $rootScope.$apply();

      expect(taskController.taskList.length).toEqual(4);
      expect(taskController.taskList[taskController.taskList.length-1].title).toEqual('ResponseTask');
    });
  });

  describe('after calling removeTask', function(){
    it('should have 2 objects in the array if dialog confirmed', function(){
      sandbox.stub(window, 'confirm').returns(true);
      taskController.removeTask(taskController.taskList[1]);

      $rootScope.$apply();
      expect(taskController.taskList.length).toEqual(2);
    });

    it('should have 3 objects in the array if dialog cancelled', function(){
      sandbox.stub(window, 'confirm').returns(false);
      taskController.removeTask();

      $rootScope.$apply();
      expect(taskController.taskList.length).toEqual(3);
    });

    it('should have 3 objects in the array if task parameter not in taskList', function(){
      sandbox.stub(window, 'confirm').returns(true);
      var task = { title: "todoNotInList" }
      taskController.removeTask(task);

      $rootScope.$apply();
      expect(taskController.taskList.length).toEqual(3);
    });
  });

});
