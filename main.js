import { operate } from './utilites/operators.js';

const btnAC = document.getElementById('ac');
const btnC = document.getElementById('c');
const btnPercent = document.getElementById('percentage');
const btnDivide = document.getElementById('divide');
const btnMultiply = document.getElementById('multiply');
const btnMinus = document.getElementById('minus');
const btnAdd = document.getElementById('add');
const btndot = document.getElementById('id-dot');
const btnEqual = document.getElementById('id-equal');
const btn0 = document.getElementById('id-0');
const btn1 = document.getElementById('id-1');
const btn2 = document.getElementById('id-2');
const btn3 = document.getElementById('id-3');
const btn4 = document.getElementById('id-4');
const btn5 = document.getElementById('id-5');
const btn6 = document.getElementById('id-6');
const btn7 = document.getElementById('id-7');
const btn8 = document.getElementById('id-8');
const btn9 = document.getElementById('id-9');

const divResult = document.getElementById('display-result');
const divValue = document.getElementById('display-value');

// First a recieve a content of btn
const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, 
                btn9, btnAC, btnAdd, btnC, btnDivide, btnEqual, btnMinus, 
                btnMultiply, btnPercent, btndot]

const data = {
    value: '',
    history: '',
    operand1: 0,
    operand2: 0,
    operator: '',
}

// console.log('hello');
// number pressed state
let isfirst = true;
let isfirstdot = true;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const valueString = button.textContent.trim();
        
        switch (valueString) {
            
            case 'AC':
                // reset value;
                clear(data);
                break;
            case 'C':
                // remove last charactor if value is not empty;
                if(data.value){
                    if(data.value[data.value.length - 1] === '.'){
                        data.value = data.value.slice(0, data.value.length - 1);
                        isfirstdot = true;
                    } else {
                        data.value = data.value.slice(0, data.value.length - 1);
                    }
                }
                break;
            case '+': 
                operatorPressed('+',data);
                break;
            case '-': 
                operatorPressed('-',data);
                break;
            case '*': 
                operatorPressed('*', data);
                break;
            case '/':
                operatorPressed('/', data);
                break;
            case '%':
                operatorPressed('%', data);
                break;
            case '=':
                equalPressed(data);
                break;
            case '.':
                console.log(valueString);
                if(isfirstdot){
                    numberPressed(valueString,data);
                }
                break;
            case '0':  // if value is 0 or empty don't add 0
                if (data.value !== '0' && data.value !== ''){
                    numberPressed(0, data);
                }
                break;
            default:
                numberPressed(valueString, data);
                break;
        }

        if (data.value === ''){
            divValue.textContent = '0';
        } else {
            divValue.textContent = data.value;
        }

        divResult.textContent = data.history;
        divValue.textContent = data.value;       
    });
});

function clear(target) {
    target.value = '';
    target.history = '';
    target.operand1 = 0;
    target.operand2 = 0;
    target.operator = '';
    isfirst = true;
    isfirstdot = true;
    
}

// if operator exists this means second operand is provided 
// else first operand is provided
function operatorPressed(op, object) {
    if(object.operator){
        object.operand2 = Number(object.value); // recieve op 2
        object.operand1 = operate(object.operator, 
            object.operand1,object.operand2); // put the result in op 1
        
    } else { 
        object.operand1 = Number(object.value); // revieve op 1
    }

    //object.value = ''; // empty value for next update
    if(object.operand1 === Infinity) {
        alert('Can\'t devide by zero');
        clear(object);
    } else {
        object.operator = op; // update operator the operator 
        object.value = object.operand1.toString(); // store the result
        object.history = `${object.operand1} ${op} `; // store history
        isfirst = true; // set number pressed state
        isfirstdot = true;
    }
    
    
}

function equalPressed(object){
    if(object.operator){
        object.operand2 = Number(object.value); // recieve op 2
        const val = object.operand1;
        object.operand1 = operate(object.operator, 
            object.operand1,object.operand2); // put the result in op 1
      
        if(object.operand1 === Infinity) {
            alert('Can\'t devide by zero');
            clear(object);
        } else {
            object.value = object.operand1.toString(); // store result
            object.history = `${val} ${object.operator} ${object.operand2} = `;
            object.operator = '';
            isfirst = true;
        }
    } 
}


function numberPressed(num, object) {
    // check if first press or not by checking for operator
    if (object.operator && isfirst){
        object.value = num;
        isfirst = false;
    } else {
        object.value += num;
    } 

    if (num === '.'){
        isfirstdot = false;
    }
    
}

