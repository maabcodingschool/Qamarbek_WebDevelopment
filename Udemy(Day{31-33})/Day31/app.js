const resultEl = document.getElementById('result')
const lenghtEl = document.getElementById('lenght')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipoardEl = document.getElementById('clipoard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSybol
}

clipoardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) {return}

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const lenght = lenghtEl.value
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasUpper = uppercaseEl.checked
    const hasSymbole = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbole, lenght)
})

function generatePassword(lower, upper, number,symbol ,lenght){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return ''
    }

    for(let i=0;i<lenght; i+= typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, lenght)

    return generatedPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+98)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSybol() {
    const symbols = '!@#$%^&*(){}[]+<>/.'
    return symbols[Math.floor(Math.random()*symbols.length)]  
}
