const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem('todo-list') || '[]');
todos.forEach(todo => addTodo(todo.text, todo.completed, false));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text, false, true);
        input.value = '';
    }
});

function saveTodos() {
    const todoElements = list.querySelectorAll('li');
    todos = [];
    todoElements.forEach(li => {
        const text = li.querySelector('span').textContent;
        const completed = li.classList.contains('completed');
        todos.push({ text, completed });
    });
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

function addTodo(text, completed = false, save = true) {
    const li = document.createElement('li');
    if (completed) li.classList.add('completed');

    // Check button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '✔';
    checkBtn.className = 'check-btn';
    checkBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTodos();
    });

    // Task text
    const span = document.createElement('span');
    span.textContent = text;

    // Move to accomplishments button
    const moveBtn = document.createElement('button');
    moveBtn.innerHTML = '🏆';
    moveBtn.className = 'move-btn';
    moveBtn.title = 'Move to Accomplishments';
    moveBtn.addEventListener('click', () => {
        // Add to accomplishments
        let accItems = JSON.parse(localStorage.getItem('accomplishments-list') || '[]');
        accItems.push({ text, completed: true });
        localStorage.setItem('accomplishments-list', JSON.stringify(accItems));
        
        // Remove from todos
        li.remove();
        saveTodos();
        
        // Show notification
        showNotification('Moved to Accomplishments! 🎉');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
        li.remove();
        saveTodos();
    });

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(moveBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    
    if (save) saveTodos();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Real-time date and time
function updateDateTime() {
    const dt = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = dt.toLocaleDateString(undefined, options);
    const timeStr = dt.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const datetimeDiv = document.getElementById('datetime');
    if (datetimeDiv) {
        datetimeDiv.textContent = `${dateStr} — ${timeStr}`;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Clear completed tasks
const clearCompletedBtn = document.getElementById('clear-completed');
if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener('click', () => {
        const completedTasks = list.querySelectorAll('li.completed');
        completedTasks.forEach(task => task.remove());
        saveTodos();
        showNotification('Completed tasks cleared!');
    });
}

// Clear all tasks
const clearAllBtn = document.getElementById('clear-all');
if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all tasks?')) {
            list.innerHTML = '';
            saveTodos();
            showNotification('All tasks cleared!');
        }
    });
}