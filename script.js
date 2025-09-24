let result = document.querySelector("#result");

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {result.textContent += "="})

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () => {})

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {result.textContent += "+"})

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {result.textContent += "-"})

const multipyBtn = document.querySelector("#multiply");
multipyBtn.addEventListener("click", () => {result.textContent += "*"})

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {result.textContent += "/"})
