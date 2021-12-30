
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// if rounding is done at validation don't worry about rounding
function divide(a, b) {
    return Math.round(a * 100.0/ b)/100;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'add': 
            return add(a, b);
        case 'subtract': 
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
        default:
            return null;
    }
}

module.exports =  {add , subtract , multiply, divide, operate};