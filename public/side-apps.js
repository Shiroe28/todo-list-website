// Calculator logic
let calcValue = "";

function calcInput(val) {
    calcValue += val;
    document.getElementById('calc-display').value = calcValue;
}

function calcEquals() {
    try {
        calcValue = eval(calcValue).toString();
    } catch {
        calcValue = "Error";
    }
    document.getElementById('calc-display').value = calcValue;
}

function calcClear() {
    calcValue = "";
    document.getElementById('calc-display').value = "";
}

// Notepad logic (save to localStorage)
const notepad = document.getElementById('notepad');
if (notepad) {
    notepad.value = localStorage.getItem('notepad') || "";
    notepad.addEventListener('input', function() {
        localStorage.setItem('notepad', notepad.value);
    });
}