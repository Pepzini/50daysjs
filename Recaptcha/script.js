const recaptcha = document.querySelector('.recaptcha');
const reloadButton = document.querySelector('.reload-button');
const input = document.querySelector('input');
const submitButton = document.querySelector('.submit-button');
const statusText = document.querySelector('.status-text');

let possibleCharacters =
 ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'K', 'L', 'M', 'N', 'O', 
'P', 'Q', 'R','S','T', 'V','X','Y',1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Z', 'a','b','c','d','e','f','g','h','i','j','k','i', 'j','k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

getRecaptcha();

function getRecaptcha(){
    for (let index = 0; index < 6; index++) {
        let randomCharacters = possibleCharacters[Math.floor(Math.random()
             * possibleCharacters.length)];
        recaptcha.innerText += ` ${randomCharacters} ` ;
    }
}

reloadButton.addEventListener('click', () =>{
    recaptcha.innerHTML = '';
    getRecaptcha();
})
submitButton.addEventListener('click', (event) =>{
   event.preventDefault();
   statusText.style.display = 'block';
   let inputValue = input.value.split('').join(' ');
   if (inputValue === recaptcha.innerText) {
       statusText.style.color = 'blue';
       statusText.innerText = 'Verified, thank you';
       setTimeout(() => {
        statusText.style.display = '';
        statusText.style.color = '';
        statusText.innerText = '';
           
       }, 4000);
   } else {
    statusText.innerText = 'Recaptcha do not match, try again';
    statusText.style.color = 'red';
   }
})