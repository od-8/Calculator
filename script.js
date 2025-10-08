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
add.addEventListener("click", () => { display.textContent += " + "; });

const subtract = document.querySelector("#subtract");
subtract.addEventListener("click", () => { display.textContent = display.textContent == "" ? "-" : " - "; });

const multipy = document.querySelector("#multiply");
multipy.addEventListener("click", () => { display.textContent += " * "; });

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => { display.textContent += " / "; });

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => { display.textContent = ""; });

const equal = document.querySelector("#equal");
equal.addEventListener("click", validExpression);

function validExpression() {
    let exp = display.textContent.split(' ');
    let total = calculateTotal(parseInt(exp[0]), exp[1], parseInt(exp[2]));

    console.log(newNum(total))

    display.textContent = validSymbols(exp) == true ? newNum(total) : "";
}

// Checks if the expression contains only one +, *, / symbol
// There can be two symbols if one of them is a minus
function validSymbols(exp) {
    if (["+", "*", "/"].includes(exp[0])) return false;
    if ((["+", "-", "*", "/"].includes(exp[1]) == false) || exp[1].length != 1) return false;
    if (["+", "-", "*", "/"].includes(exp[2])) return false;

    return true;
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

function newNum(number) {
    num = number % 1 == 0 ? number : number.toFixed(1);
    return num;
}
