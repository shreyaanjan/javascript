function appendValue(val) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar) && operators.includes(val)) {
        display.value = display.value.slice(0, -1) + val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    document.querySelector('.display').classList.toggle('dark-mode');
    document.querySelector('.toggle-switch').classList.toggle('active');
    document.querySelector('.toggle-label').classList.toggle('dark-mode');
    document.querySelector('h1').classList.toggle('dark-mode');
}