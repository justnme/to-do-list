let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = { text: taskInput.value, done: false };
    tasks.push(task);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let doneClass = tasks[i].done ? 'done' : '';
        taskList.innerHTML += '<div class="task ' + doneClass + '" id="task' + i + '">' +
            '<input type="checkbox" onclick="toggleDone(' + i + ')" ' + (tasks[i].done ? 'checked' : '') + '>' +
            '<span>' + tasks[i].text + '</span>' +
            '<div class="task-controls">' +
            '<button onclick="deleteTask(' + i + ')">Видалити</button>' +
            '</div></div>';
    }
}

renderTasks();
        