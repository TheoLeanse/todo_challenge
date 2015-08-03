var ToDoApp = angular.module('ToDoApp', [])

.controller('TaskController', function() {
  var vm     = this;
  vm.tasks   = [];

  vm.addTask = function(task) {
    vm.tasks.push({
      'task': task,
      'status': 'to-do'
    });
  };

  vm.markAsDone = function (task) {
    task.status = 'completed';
  };

  vm.cleanUp = function() {
    vm.tasks = vm.tasks.filter(function(el) {
      return (el.status === 'to-do');
    });
  };
});
