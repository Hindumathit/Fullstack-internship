const taskList = document.getElementById('task-list');

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <input type="text" class="edit-mode" value="${taskText}">
        <button onclick="editTask(this)">Edit</button>
        <button onclick="saveTask(this)" class="edit-mode">Save</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement;
    li.querySelector('.task-text').style.display = 'none';
    li.querySelector('.edit-mode').style.display = 'inline';
    button.style.display = 'none';
    li.querySelector('.edit-mode + .edit-mode').style.display = 'inline';
}

function saveTask(button) {
    const li = button.parentElement;
    const newText = li.querySelector('.edit-mode').value;
    li.querySelector('.task-text').textContent = newText;
    li.querySelector('.task-text').style.display = 'inline';
    li.querySelector('.edit-mode').style.display = 'none';
    button.style.display = 'none';
    li.querySelector('button').style.display = 'inline';
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
