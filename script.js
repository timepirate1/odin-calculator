let inputNumber1 = null;
let inputNumber2 = null;
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

function clearScreen(){
    display.innerText= ' '; 
    inputNumber1 = null;
    inputNumber2 = null;
    input = '';
    operator = '';
    equalsPressed = false;
    console.log('i was called yes')
}



//displays the input on screen
const display =document.querySelector('.display');
let input = '';

//handles calculations
function operate(inputNumber1,inputNumber2,operator){
    let result = 0;
    if (operator ==='+'){
        result = add(inputNumber1,inputNumber2);
    }   
    if (operator ==='-'){
        result = subtract(inputNumber1,inputNumber2);
    }   
    if (operator ==='*'){
        result = multiply(inputNumber1,inputNumber2);
    }   
    if (operator ==='/'){
        if(inputNumber2===0){
            clearScreen();
            display.innerText = "Can't divide with 0, try again";
            console.log('m called?')
            return; // needed to stop function and not call the below display command to render result
        }
        else{
           result = divide(inputNumber1,inputNumber2);
        }
        
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
        inputNumber1 = Number(equals);
        equals = '';
        equalsPressed = false;
      }
      else{
        if(inputNumber1 !== null) {
            inputNumber1 = operations();
            inputNumber2 = null;
        } 
        else{
            inputNumber1 = Number(input);
        }
      }
      
       
    
        console.log(inputNumber1);
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
            inputNumber2 = Number(input);
            console.log(inputNumber2);
            let answer = operate(inputNumber1,inputNumber2,operator);
            input = '';
            console.log('hi im called');
            return answer;
           }




document.querySelector('#equal-btn').addEventListener('click',()=>{
    if(input === '' || inputNumber1 === null || operator === '' ){
            //does nothing
    }else{
        equals = operations();
        equalsPressed = true;
    }

    
} );

//clears the screen
const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click',()=>{
   clearScreen();
})
