function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
            li.textContent = taskInput.value;