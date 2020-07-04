var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var val = document.querySelectorAll('.val');
var btn = document.querySelectorAll('.btn');

var decimal = document.getElementById('decimal');


var plus = document.getElementById('plus');
var minus = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');


var clear = document.getElementById('ac');
var remove = document.getElementById('ce');

//evaluate the equation
var equals = document.getElementById('equals');


var output = document.getElementById('output');


//capture the sequence of values

// 3 + 4 * 8 = 35

let equation;


// when = is pressed, calculation happens

function evaluate(e) {
    console.log(e);
    console.log('done')
}

let display = '0';
let input1 = '';
let input2 = '';
let operator = '';


function updateOutput(e){

    //if input1 is set we need to clear the display
    
    // if (input1.length > 0) {
    //     clearOutput();
    // }
    
    if (display.length <= 15) {

        if (display === '0') {
            display = e.target.dataset.val;
            updateDisplay();
        } else {
            display += e.target.dataset.val;
            updateDisplay();
        }
        
    }
    
    // display += 'yo ';
    // console.log(display);
    // updateDisplay();
}

function clearOutput(){
    display = '0';
    updateDisplay();
    
}

function deleteChar(){
    if (display.length > 0 && display !== '0') {
        display = display.slice(0, display.length -1);
    }
    updateDisplay();
}

function updateDisplay(){
    output.textContent = display;
}

//if we hit an operator - save the contents of display as input1
//

function setOperator(e){
    operator = e.target.dataset.operator;
    input1 = display;
    display = '';
    
    console.log(operator);
}

function calculate( input1, operator, input2 ) {
    input2 = display;

    if (operator === 'add') {
        display = parseInt(input1) + parseInt(input2);
    } else if (operator === 'subtract') {
        display = parseInt(input1) - parseInt(input2);
    } else if (operator === 'multiply') {
        display = parseInt(input1) * parseInt(input2);
    } else if (operator === 'divide') {
        display = parseInt(input1) / parseInt(input2);
    } 

    updateDisplay();
}


// equals.addEventListener('click', evaluate);

//set up keypress events

btn.forEach(el => el.addEventListener('click', (e) => {

    if (e.target.matches('.ac')) {
        clearOutput();
    } else if (e.target.matches('.ce')) {
        deleteChar();
    } else if (e.target.matches('.val')) {
        updateOutput(e);
    } else if (e.target.matches('.operator')) {
        setOperator(e);
    } else if (e.target.matches('#equals')) {
        calculate(input1, operator, input2);
    }

}))



