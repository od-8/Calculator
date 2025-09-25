let display = document.querySelector("#display");

// Numbers
const one = document.querySelector("#one");
one.addEventListener("click", () => {display.textContent += "1"});

const two = document.querySelector("#two");
two.addEventListener("click", () => {display.textContent += "2"});

const three = document.querySelector("#three");
three.addEventListener("click", () => {display.textContent += "3"});

const four = document.querySelector("#four");
four.addEventListener("click", () => {display.textContent += "4"});

const five = document.querySelector("#five");
five.addEventListener("click", () => {display.textContent += "5"});

const six = document.querySelector("#six");
six.addEventListener("click", () => {display.textContent += "6"});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {display.textContent += "7"});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {display.textContent += "8"});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {display.textContent += "9"});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {display.textContent += "0"});

// Operators
const add = document.querySelector("#add");
add.addEventListener("click", () => {display.textContent += "+"})

const subtract = document.querySelector("#subtract");
subtract.addEventListener("click", () => {display.textContent += "-"})

const multipy = document.querySelector("#multiply");
multipy.addEventListener("click", () => {display.textContent += "*"})

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => {display.textContent += "/"});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {display.textContent = ""});

const equal = document.querySelector("#equal");
equal.addEventListener("click", peformCalculation);


function peformCalculation() {
    let inputArr = display.textContent.split("")
    let firstNum = "";
    let operator = "";
    let lastNum = "";
    let answer = null;

    for(let i = 0; i < inputArr.length; i ++) {
        if(Number.isInteger(parseInt(inputArr[i])) && operator == "") {
            firstNum += inputArr[i];
        } else if (Number.isInteger(parseInt(inputArr[i])) && operator != "") {
            lastNum += inputArr[i];
        } else {
            operator += inputArr[i];
        };
    }

    answer = solveEquation(operator, parseInt(firstNum), parseInt(lastNum));

    console.log(answer);
}

function solveEquation(operator, firstNum, lastNum) {
    switch (operator) {
        case "+":
            return addition(firstNum, lastNum);
        case "-":
            return subtraction(firstNum, lastNum);
        case "*":
            return multiplication(firstNum, lastNum);
        case "/":
            return division(firstNum, lastNum);
    }
}

function addition(firstNum, lastNum) { return firstNum + lastNum };
function subtraction(firstNum, lastNum) { return firstNum - lastNum };
function multiplication(firstNum, lastNum) { return firstNum * lastNum };
function division(firstNum, lastNum) { return firstNum / lastNum };
