var ToDoApp = angular.module('ToDoApp', [])
  .controller('TaskController', TaskController);

function TaskController() {
  var vm = this;

  vm.tasks    = [];
  vm.addTask  = addTask;
  vm.markImportant = markImportant;
  vm.markDone = markDone;
  vm.cleanUp  = cleanUp;
}

function addTask(task) {
  this.tasks.push({
    'task': task,
    'status': 'to-do'
  });
}

function markImportant(task) {
  task.status = 'important';
}

function markDone(task) {
  task.status = 'completed';
}

function cleanUp() {
  this.tasks = this.tasks.filter(function(task) {
    return (task.status === 'to-do');
  });
}
