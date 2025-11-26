let number1 = null;
let number2 = null;
let operator = '';

function add(a,b){
    return  Number(a)+Number(b);
}
function subtract(a,b){
    return  a-b;
}
function multiply(a,b){
    return  a*b;
}
function divide(a,b){
    return  a/b;
}




//displays the input on screen
const display =document.querySelector('.display');
let input = null;

//handles calculations
function operate(number1,number2,operator){
    let result = 0;
    if (operator ==='+'){
        result = add(number1,number2);
    }   
    if (operator ==='-'){
        result = subtract(number1,number2);
    }   
    if (operator ==='*'){
        result = multiply(number1,number2);
    }   
    if (operator ==='/'){
        result = divide(number1,number2);
    }   
    display.innerText = result;
    console.log(result);
    
}


//used to display input 
function displayInput(ip){
    input += ip;
    display.innerText += ip ;

}

//used to take input from numeric keys
let inputButtons = document.querySelectorAll('.num-btn');
inputButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        displayInput(button.textContent);
    })
});


// handles operation input and calling operations
let operationButtons = document.querySelectorAll('.op-btn');
operationButtons.forEach(but=>{
    but.addEventListener('click',()=>{
        // stores input as number 1
        number1 = input;
        operator = but.textContent;
        console.log(operator);
        displayInput(but.textContent);
        //resets input
        input = null; 
        console.log(number1);
        // handles equal button and operation calling
        document.querySelector('#equal-btn').addEventListener('click',()=>{
            number2 = input;
            console.log(number2);
            operate(number1,number2,operator);
            input = '';
           })
    })
});



//clears the screen
const clearScreen = document.querySelector('.clear-btn');
clearScreen.addEventListener('click',()=>{
    display.innerText= ' '; 
    number1 = null;
    number2 = null;
    input = null;
    operator = '';

})









// note we do + before prompt to ensure the value is numeric and not taken as a string a
// as that can conflict with the addition function and append instead of add the numbers

// number1 = + prompt('enter first number'); 
// operator = prompt('operation');
// number2 = + prompt('enter 2nd number');


//operate(number1,number2,operator)