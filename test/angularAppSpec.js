describe('TaskController', function() {
  beforeEach(module('ToDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');
  }));

  it('has a list of tasks', function() {
    expect(ctrl.tasks).toBeDefined();
  });

  it('adds a task to the list', function() {
    ctrl.addTask('Go gym');
    expect(ctrl.tasks.length).toEqual(1);
  });

  it('adds tasks with a default status of \'to-do\'', function() {
    ctrl.addTask('Go gym');
    var task = ctrl.tasks[0];
    expect(task.status).toBe('to-do');
  });

  it('marks task status as completed', function() {
    ctrl.addTask('Go gym');
    var task = ctrl.tasks[0];
    ctrl.markDone(task);
    expect(task.status).toBe('completed');
  });

  it('marks task status as important', function() {
    ctrl.addTask('Go gym');
    var task = ctrl.tasks[0];
    ctrl.markImportant(task);
    expect(task.status).toBe('important');
  });

  it('lists tasks by status', function() {

  });

  it('clears completed tasks', function() {
    ctrl.addTask('Go gym');
    ctrl.addTask('Go shops');
    var task = ctrl.tasks[0];
    ctrl.markDone(task);
    ctrl.cleanUp();
    expect(ctrl.tasks.length).toEqual(1);
  });
});
