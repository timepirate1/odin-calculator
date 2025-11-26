let number1 = NaN;
let number2 = NaN;
let operator = '';

function add(a,b){
    return  a+b;
}
function subtract(a,b){
    return  a-b;
}
function mulitply(a,b){
    return  a*b;
}
function divide(a,b){
    return  a/b;
}

function operate(number1,number2,operator){
    let result = 0;
    if (operator ==='+'){
        result = add(number1,number2);
    }   
    if (operator ==='-'){
        result = subtract(number1,number2);
    }   
    if (operator ==='*'){
        result = mulitply(number1,number2);
    }   
    if (operator ==='/'){
        result = divide(number1,number2);
    }   
    console.log(result);
}





const display =document.querySelector('.display');
function displayInput(input){
   
    display.innerText += input ;
}

let inputButtons = document.querySelectorAll('.num-btn');
inputButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const input = button.textContent;
        displayInput(input);
    })
});


const clearScreen = document.querySelector('.clear-btn');
clearScreen.addEventListener('click',()=>{
    display.innerText= ' ';
})









// note we do + before prompt to ensure the value is numeric and not taken as a string a
// as that can conflict with the addition function and append instead of add the numbers

// number1 = + prompt('enter first number'); 
// operator = prompt('operation');
// number2 = + prompt('enter 2nd number');


//operate(number1,number2,operator)