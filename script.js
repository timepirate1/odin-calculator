let number1 = null;
let number2 = null;
let operator = '';
let equalsPressed = false; 
let equals = '';


function add(a,b){
    return a+b;
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
let input = '';

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
    return result;
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
      if( equalsPressed === true){
        number1 = Number(equals);
        equals = '';
        equalsPressed = false;
      }
      else{
        if(number1 !== null) {
            number1 = operations();
            number2 = null;
        } 
        else{
            number1 = Number(input);
        }
      }
      
       
    
        console.log(number1);
        operator = but.textContent;
        console.log(operator);
        displayInput(but.textContent);
        //resets input
        input = ''; 
        //operations();
    })
});


function operations (){
    // handles and operation calling
            number2 = Number(input);
            console.log(number2);
            let answer = operate(number1,number2,operator);
            input = '';
            console.log('hi im called');
            return answer;
           }




document.querySelector('#equal-btn').addEventListener('click',()=>{
    equals = operations();
    equalsPressed = true;
    
} );

//clears the screen
const clearScreen = document.querySelector('.clear-btn');
clearScreen.addEventListener('click',()=>{
    display.innerText= ' '; 
    number1 = null;
    number2 = null;
    input = '';
    operator = '';

})









// note we do + before prompt to ensure the value is numeric and not taken as a string a
// as that can conflict with the addition function and append instead of add the numbers

// number1 = + prompt('enter first number'); 
// operator = prompt('operation');
// number2 = + prompt('enter 2nd number');


//operate(number1,number2,operator)