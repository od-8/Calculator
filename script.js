let display = document.querySelector("#display");

// Numbers
const one = document.querySelector("#one");
one.addEventListener("click", () => { display.textContent += 1; });

const two = document.querySelector("#two");
two.addEventListener("click", () => { display.textContent += 2; });

const three = document.querySelector("#three");
three.addEventListener("click", () => { display.textContent += 3; });

const four = document.querySelector("#four");
four.addEventListener("click", () => { display.textContent += 4; });

const five = document.querySelector("#five");
five.addEventListener("click", () => { display.textContent += 5; });

const six = document.querySelector("#six");
six.addEventListener("click", () => { display.textContent += 6; });

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => { display.textContent += 7; });

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => { display.textContent += 8; });

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => { display.textContent += 9; });

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => { display.textContent += 0; });

// Operators
const add = document.querySelector("#add");
add.addEventListener("click", () => { display.textContent += "+"; });

const subtract = document.querySelector("#subtract");
subtract.addEventListener("click", () => { display.textContent += "-"; });

const multipy = document.querySelector("#multiply");
multipy.addEventListener("click", () => { display.textContent += "*"; });

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => { display.textContent += "/"; });

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {vdisplay.textContent = ""; });

const equal = document.querySelector("#equal");
equal.addEventListener("click", validExpression);

function validExpression() {
    let exp = display.textContent.split('');

    if (validSymbols(exp) == false) { 
        display.textContent = "";
        return;
    }

    display.textContent = solveExpression(exp);
}

// Checks if the expression contains only one +, *, / symbol
// There can be two symbols if one of them is a minus
function validSymbols(exp) {
    let symbols = 0;

    for(let i = 0; i < exp.length; i++) {
        if (["+", "-", "*", "/"].includes(exp[i]) && i != 0) symbols += 1;
    }

    if (symbols != 1 || ["+", "*", "/"].includes(exp[0])) return false;

    return true;
}

// Solves the expression
function solveExpression(exp) {
    for(let i = 0; i < exp.length; i++) {
        if (i != 0 && ["+", "-", "*", "/"].includes(exp[i])) {
            return calculateTotal(determineFirstNum(exp), exp[i], parseInt(exp.slice(i + 1).join("")));
        }
    }
}

// Gets the first num
function determineFirstNum(exp) {
    let num = "";

    for(let i = 0; i < exp.length; i++) {
        if (i == 0 || Number.isInteger(parseInt(exp[i]))) num += exp[i];
        if (i != 0 && Number.isInteger(parseInt(exp[i])) == false) break;
    }

    return parseInt(num);
}

// Gets the new total
function calculateTotal(firstNum, symbol, secondNum) {
    switch(symbol) {
        case "+":
            return firstNum += secondNum;
        case "-":
            return firstNum -= secondNum;
        case "*":
            return firstNum *= secondNum;
        case "/":
            return firstNum /= secondNum;
    }
}
