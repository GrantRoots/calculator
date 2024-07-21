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

function operate(displayString) {
    splitString = displayString.split('')
    operator = splitString.filter(operator => isNaN(operator)).join()
    firstNumber = splitString.slice(0, splitString.indexOf(operator)).join('')
    secondNumber = splitString.slice(splitString.indexOf(operator) + 1).join('')

    if (operator === '+') {
        return add(Number(firstNumber), Number(secondNumber))
    }
    else if (operator === '-') {
        return subtract(Number(firstNumber), Number(secondNumber))
    }
    else if (operator === '*') {
        return multiply(Number(firstNumber), Number(secondNumber))
    }
    else if (operator === '/') {
        return divide(Number(firstNumber), Number(secondNumber))
    }
}

function clear() {
    displayString = ''
}

let firstNumber = ''
let operator = ''
let secondNumber = ''
let displayString = ''

const display = document.querySelector('#display')

const button = document.querySelectorAll('.number').forEach(button => 
    button.addEventListener('click', () => {
        displayString += button.id
        display.textContent = displayString
    }
))

const operatorButton = document.querySelectorAll('.operator').forEach(operatorButton => 
    operatorButton.addEventListener('click', () => {
        displayString += operatorButton.id
        display.textContent = displayString
    }, {once : true})
)

const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
        display.textContent = operate(displayString)
    }
)