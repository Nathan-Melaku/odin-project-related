
function add(a, b) {
    return round(a + b);
}

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

// if rounding is done at validation don't worry about rounding
function divide(a, b) {
    return Math.round(a * 100.0/ b)/100;
}

function percent(a, b) {
    return Math.round((divide(a, 100) * b) * 100)/100;
}

function round(a) {
    return Math.round((a * 100))/100
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': 
            return add(a, b);
        case '-': 
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        case '%':
            return percent(a,b);
        default:
            return null;
    }
}

export {add , subtract , multiply, divide, operate, percent};