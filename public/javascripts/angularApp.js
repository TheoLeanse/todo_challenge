var ToDoApp = angular.module('ToDoApp', ['xeditable'])
  .controller('TaskController', TaskController);

function TaskController() {
  var vm = this;

  vm.tasks           = [];
  vm.addTask         = addTask;
  vm.markImportant   = markImportant;
  vm.markDone        = markDone;
  vm.cleanUp         = cleanUp;
  vm.editTask        = editTask;
  vm.clearAll        = clearAll;
  vm.resetTaskStatus = resetTaskStatus;
}

function addTask(task) {
  this.tasks.push({
    'task': task,
    'status': 'to-do'
  });
}

function editTask(task, edit) {
  task.task = edit;
}

function markImportant(task) {
  task.status = 'important';
}

function resetTaskStatus(task) {
  task.status = 'to-do';
}

function markDone(task) {
  task.status = 'completed';
}

function cleanUp() {
  this.tasks = this.tasks.filter(function(task) {
    return (task.status === 'to-do');
  });
}

function clearAll() {
  this.tasks = [];
}
