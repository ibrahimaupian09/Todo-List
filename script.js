function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
            li.textContent = taskInput.value;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
    taskList.removeChild(li);
    };

    li.onclick = function () {
        li.classList.toggle('completed');
    };
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = '';

}