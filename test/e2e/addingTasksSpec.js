describe('To Do: main page', function() {

  afterEach(function() {
    clearAll.click();
  });

  var tasks         = element.all(by.repeater('task in taskCtrl.tasks'));
  var task          = element(by.binding('task.task'));
  var submitBox     = element(by.model('taskCtrl.submittedTask'));
  var editInput     = element(by.model('taskCtrl.editText'));
  var submitBtn     = element(by.css('.taskSubmitBtn'));
  var completeBtn   = element(by.css('.completeBtn'));
  var clearBtn      = element(by.css('.cleanUpBtn'));
  var completeTask  = element(by.css('.completed'));
  var importantTask = element(by.css('.important'));
  var resetBtn      = element(by.css('.resetBtn'));
  // var toDoTask      = element(by.css('.to-do'));
  var importantBtn  = element(by.css('.importantBtn'));
  var editBtn       = element(by.css('.editBtn'));
  var editSubmitBtn = element(by.css('.editSubmitBtn'));
  var clearAll      = element(by.css('.clearAllBtn'));


  function addTask() {
    submitBox.sendKeys('Go gym');
    submitBtn.click();
  }

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo App');
  });

  describe('adding tasks', function() {
    it('allows the user to add a task', function() {
      addTask();
      expect(task.getText()).toEqual('Go gym');
    });

    it('clears the input field after a task is added', function() {
      addTask();
      expect(submitBox.getText()).toEqual('');
    });
  });

  describe('editing tasks', function() {
    it('allows the user to edit a task', function() {
      addTask();
      // expect edit field to be hidden
      editBtn.click();
      // expect edit field to be shown
      editInput.sendKeys('Go shops');
      editSubmitBtn.click();
      expect(task.getText()).toEqual('Go shops');
      // expect edit field to be hidden
    });
  });

  describe('important tasks', function() {
    it('marks a task as important', function() {
      addTask();
      importantBtn.click();
      expect(importantTask.getText()).toEqual('Go gym');
    });

    it('allows the user to reset the task to normal', function() {
      addTask();
      importantBtn.click();
      resetBtn.click();
      expect(element(by.css('.to-do')).getText()).toEqual('Go gym');
    });

    it('does not show important and reset buttons simultaneously', function() {

    });
  });

  describe('filtering tasks', function() {
    it('can display only important tasks', function() {

    });
  });

  describe('completing tasks', function() {
    it('marks a task as completed', function() {
      addTask();
      completeBtn.click();
      expect(completeTask.getText()).toEqual('Go gym');
    });

    it('clears completed tasks', function() {
      addTask();
      completeBtn.click();
      clearBtn.click();
      expect(tasks.count()).toEqual(0);
    });

    it('allows a user to view all completed tasks', function() {

    });
  });
});
