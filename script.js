// Get the display element
const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    // Prevent adding multiple operators consecutively
    if (display.value === '' || isOperator(display.value.slice(-1))) {
        return;
    }
    display.value += operator;
}

// Function to append a decimal point to the display
function appendDecimal() {
    // Prevent adding multiple decimal points
    if (display.value.includes('.')) {
        return;
    }
    display.value += '.';
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to calculate the result
function calculate() {
    try {
        // Use the eval() function to evaluate the expression in the display
        // **Caution:** Using eval() can be risky with untrusted input as it can execute arbitrary code.
        // For a more secure calculator, you would implement your own parsing and evaluation logic.
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; // Display 'Error' if the expression is invalid
    }
}