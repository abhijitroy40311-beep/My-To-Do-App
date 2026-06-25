const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Populate HTML inside the list item
    li.innerHTML = `
                <span class="task-text" onclick="toggleComplete(this)">${text}</span>
                <div class="actions">
                    <button class="action-btn edit-btn" onclick="renameTask(this)" title="Rename Task">✏️</button>
                    <button class="action-btn delete-btn" onclick="deleteTask(this)" title="Delete Task">❌</button>
                </div>
            `;

    // Append to list and clear input
    taskList.appendChild(li);
    taskInput.value = '';
}

function renameTask(button) {
    const li = button.closest('li');
    const taskSpan = li.querySelector('.task-text');
    const currentText = taskSpan.innerText;

    // Prompt user for new task name
    const newText = prompt("Rename your task:", currentText);

    if (newText !== null && newText.trim() !== '') {
        taskSpan.innerText = newText.trim();
        // If it was completed, un-complete it upon renaming (optional behavior)
        taskSpan.classList.remove('completed');
    }
}

function deleteTask(button) {
    const li = button.closest('li');
    // Add a brief fade-out effect before removing
    li.style.opacity = '0';
    setTimeout(() => {
        li.remove();
    }, 200);
}

function toggleComplete(taskSpan) {
    taskSpan.classList.toggle('completed');
}