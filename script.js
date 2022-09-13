const display = document.getElementById('display')
let operator = null
let num1 = ''
let num2 = ''
let res = null

function handleNumber(number) {
    if (number === '.'){
        if (display.textContent.charAt(display.textContent.length - 1) === '.' || display.textContent.charAt(display.textContent.length - 1) === '' ) {
            return
        }
    }
    if (number === 0){
        if (display.textContent.charAt(display.textContent.length - 1) === '' ) {
            return
        }
    }
    if (Number(num1 + number) > 999999999 || Number(num2 + number) > 999999999){
        return
    }
    display.textContent += number
    if (operator === null){
        num1 += number
    } else {
        num2 += number
    }
}

function clearDisplay(){
    display.textContent = ''
    num1 = ''
    num2 = ''
    res = null
    operator = null
}

function handleOperator(oper){
    if (operator !== null && res !== null){
        num1 = res
        num2 = ''
        res = null
    }
    operator = oper
    display.textContent = ''
}

function calculate(){
    if (operator === '+'){
        if (res === null) {
            res = Number(num1) + Number(num2)
        } else {
            res = res + Number(num2)
        }
    }
    if (operator === '-'){
        if (res === null) {
            res = Number(num1) - Number(num2)
        } else {
            res = res - Number(num2)
        }
    }
    if (operator === 'x'){
        if (res === null) {
            res = Number(num1) * Number(num2)
        } else {
            res = res * Number(num2)
        }
    }
    if (operator === '/'){
        if (res === null) {
            res = Number(num1) / Number(num2)
        } else {
            res = res / Number(num2)
        }
    }

    display.textContent = res;
}