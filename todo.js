document.getElementById('btn').addEventListener('click', function () {
    handleAddTask();
});

document.getElementById('taskInput').addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        handleAddTask();
    }
});

function handleAddTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
        input.focus();
    }
}

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '1rem';
    deleteBtn.style.background = '#a7a1a1ff';
    deleteBtn.style.color = '#000000ff';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.onclick = function (e) {
        e.stopPropagation();
        taskList.removeChild(li);
    };e

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
