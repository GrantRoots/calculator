function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let firstNumber = ''
let operator = ''
let secondNumber = ''

function operate(firstNumber, operator, secondNumber) {

}

const display = document.querySelector('#display')

const button = document.querySelectorAll('.number').forEach(button => 
    button.addEventListener('click', () => {
        firstNumber += button.id
        display.textContent = firstNumber
        console.log(firstNumber)
    }
))

const operatorButton = document.querySelectorAll('.operator').forEach(operatorButton => 
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.id
        display.textContent = operator
    })
)