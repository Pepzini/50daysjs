const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const text = 'I love JavaScript';

let index = 1;
let speed = 300 / speedElement.value;

writeText();

function writeText() {
    textElement.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 1;
    }

    setTimeout(writeText, speed);
}
speedElement.addEventListener('input', (event) => speed =  300/event.target.value);