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
    let operator = splitString.filter(operator => isNaN(operator) && operator != '.').join()
    let firstNumber = splitString.slice(0, splitString.indexOf(operator)).join('')
    let secondNumber = splitString.slice(splitString.indexOf(operator) + 1).join('')

    if (operator === '+') {
        return Math.round(add(Number(firstNumber), Number(secondNumber)) * 100) / 100
    }
    else if (operator === '-') {
        return Math.round(subtract(Number(firstNumber), Number(secondNumber) * 100)) / 100
    }
    else if (operator === '*') {
        return Math.round(multiply(Number(firstNumber), Number(secondNumber)) * 100) / 100
    }
    else if (operator === '/') {
        if (secondNumber == 0) {
            return 'No, no, no...'
        }
        return Math.round(divide(Number(firstNumber), Number(secondNumber)) * 100) / 100
    }
    else {
        return 'ERROR'
    }
}

function checkNewOperator(displayString) {
    splitString = displayString.split('')
    let numOfOperators = splitString.filter(operator => isNaN(operator) && operator != '.')
    if (numOfOperators.length >= 2) {
        let newOperator = numOfOperators[1]
        splitString.splice(-1, 1)
        return displayString = operate(splitString.join('')) + newOperator
    }
    return
}

let displayString = ''

const display = document.querySelector('#display')

const button = document.querySelectorAll('.number, .operator').forEach(button => 
    button.addEventListener('click', () => {
        displayString += button.id
        if (checkNewOperator(displayString)){
            displayString = checkNewOperator(displayString)
        }
        display.textContent = displayString
    }
))

const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
        display.textContent = operate(displayString)
        displayString = operate(displayString)
    }
)

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
        displayString = ''
        display.textContent = '0'
    }
)