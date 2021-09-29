const screens = document.querySelectorAll('.screen');
const chooseInsectButtons = document.querySelectorAll('.choose-insect-button');
const startButton = document.getElementById('start-button');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const gameContainer = document.getElementById('game-container');

let seconds = 0;
let score = 0;
let selectedInsect = {};

startButton.addEventListener('click', ()=> screens[0].
classList.add('up'));

chooseInsectButtons.forEach(insectButton => {
    insectButton.addEventListener('click', () =>{
        const img = insectButton.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedInsect = {src, alt}

        screens[1].classList.add('up');

        setTimeout(createInsect, 1000);
        startGame();
    })
});

function startGame() {
    setInterval(increaseTime, 1000);
}
function increaseTime() {
    let minute = Math.floor(seconds / 60)
    let second = seconds % 60;
    minute = minute < 10 ?  `0${minute}` : minute;
    second = second< 10 ?  `0${second}` : second;
    
    timeElement.innerHTML = `Time: ${minute}:${second}`
    seconds++
}
 function createInsect() {
     const insect = document.createElement('div');
     insect.classList.add('insect');
     const {x, y} = getRandomLocation();
     insect.style.left = `${x}px`;
     insect.style.top = `${y}px`;
     insect.innerHTML = `<img src="${selectedInsect.src}"
      alt="${selectedInsect.alt}" 
      style = "transform: rotate{${Math.random() * 360}deg}"/>`
      
      insect.addEventListener('click', catchInsect)
      gameContainer.appendChild(insect)
 }

 function getRandomLocation() {
     const width = window.innerWidth;
     const height = window.innerHeight;
     const x = Math.random() * (width - 200) + 100;
     const y = Math.random() * (height - 200) + 100; 
     return {x, y}
 }

 function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => {
        this.remove()
    }, 2000);
    addInsects();
 }

 function addInsects() {
     setTimeout(createInsect, 1500);
     setTimeout(createInsect, 1500);
 }
 function increaseScore() {
     score++
    //the if sttement below insects the annoying message 
    if (score > 15) {
        messageElement.classList.add('visible')
    }
    scoreElement.innerHTML = `score: ${score}`
 }
