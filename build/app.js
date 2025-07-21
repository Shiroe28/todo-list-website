const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
    }
});

function addTodo(text) {
    const li = document.createElement('li');

    // Check button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '✔';
    checkBtn.className = 'check-btn';
    checkBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Task text
    const span = document.createElement('span');
    span.textContent = text;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
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