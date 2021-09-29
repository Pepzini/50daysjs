const resultElement = document.getElementById('result');
const symbolElement = document.getElementById('symbols');
const lowerCaseElement = document.getElementById('includeLowercase');
const upperCaseElement = document.getElementById('includeUppercase');
const numberElement = document.getElementById('includeNumbers');
const generateElement = document.getElementById('generate');
const clipBoardElement = document.getElementById('clipboard');
const passwordLength = document.getElementById('length');
const notify = document.getElementById('error-message');
//functions for random characters are decleared here and created later in the code
const randomFunctions = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    symbols: getRandomSymbol,
    numbers: getRandomNumber
}
clipBoardElement.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultElement.innerText;

    if (!password) { return }

    textArea.value = password;
    document.body.appendChild(textArea)
    textArea.select();//selects everything in the text area
    document.execCommand('copy')
    textArea.remove();

    alert('password copied to clipboard')
})
//storing variabes to see if the characters are included
generateElement.addEventListener('click', () => {
    const length = +passwordLength.value;
    const hasSymbol = symbolElement.checked;
    const hasUpperCase = upperCaseElement.checked;
    const hasLowerCase = lowerCaseElement.checked;
    const hasNumbers = numberElement.checked;

    resultElement.innerText = generatePassword(hasSymbol, hasUpperCase, hasLowerCase, hasNumbers, length);
});


function generatePassword(lower, upper, numbers, symbols, length) {
    let generatedPassword = '';
    const typeCount = lower + upper + numbers + symbols;
    const typeArray = [{ lower }, { upper }, { numbers }, { symbols }]
        .filter(item => Object.values(item)[0]);

    if (typeCount == 0 ) {
        return '';
    }

    if (passwordLength.value < 5) { //this is to ensure that password less than 5 chracaters can not be generated

        const errorMessage = document.createElement('p'); //initializing the error message
        errorMessage.classList.add('error-message')
        errorMessage.innerText = 'Password length can not be less than 5!'
        
        notify.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
        return errorMessage, resultElement.innerText = '';
    }

    for (let index = 0; index < length; index += typeCount) {
        typeArray.forEach(type => {
            const functionName = Object.keys(type)[0]
            generatedPassword += randomFunctions[functionName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword; //whatever result is gotten here is places in the innerText of the resultElement
}
//the first four functions directly below allows you to geneeate random numbers from the Character Code in ASCII reference 
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +
        97)
}
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +
        65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) +
        48)
}
function getRandomSymbol(params) {
    const symbols = '!"£$%^&*(){}~@:<>?/.,';
    return symbols[Math.floor(Math.random() * symbols.length)]
}
