let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    // Allow only one operator at the end of the expression
    if (!isOperator(displayValue.slice(-1))) {
        displayValue += operator;
        updateDisplay();
    }
}

function appendDecimal() {
    // Allow only one decimal point in a number
    if (!displayValue.includes('.') && isLastCharNumber()) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Helper functions
function isLastCharNumber() {
    const lastChar = displayValue.slice(-1);
    return !isNaN(lastChar) || lastChar === '.';
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
