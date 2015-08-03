describe('To Do: main page', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  var tasks        = element.all(by.repeater('task in taskCtrl.tasks'));
  var submitBox    = element(by.model('taskCtrl.submittedTask'));
  var submitButton = element(by.id('task_submit_button'));
  var task         = element(by.binding('task.task'));
  var completedBtn = element(by.css('.complete_btn'));
  var clearBtn     = element(by.css('.cleanUpBtn'));

  function addTask() {
    submitBox.sendKeys('Go gym');
    submitButton.click();
  }

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('ToDo App');
  });

  describe('adding tasks', function() {

    it('should allow a user to add a task', function() {
      addTask();
      expect(task.getText()).toEqual('Go gym');
    });

    it('clears the input field after a task is added', function() {
      addTask();
      expect(submitBox).toEqual('');
    });

  });

  describe('completing tasks', function() {

    it('marks a task as completed', function() {
      addTask();
      completedBtn.click();
      expect(element(by.css('.completed')).getText()).toEqual('Go gym');
    });

    it('clears completed tasks', function() {
      addTask();
      completedBtn.click();
      clearBtn.click();
      expect(tasks.count()).toEqual(0);
    });

  });

});
