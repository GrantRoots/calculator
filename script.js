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

let firstNumber = 0
let operator = 0
let secondNumber = 0

function operate(firstNumber, operator, secondNumber) {

}

const display = document.querySelector('#display')

const button = document.querySelectorAll('.box').forEach(button => 
    button.addEventListener('click', () => {
        firstNumber = button.id
    }
))