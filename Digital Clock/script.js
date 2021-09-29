const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleButton = document.querySelector('.toggle');
const audioSound = document.querySelector('audio');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Feruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//toggling the dark mode
toggleButton.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode';
    }
});

secondElement.addEventListener("a", ()=>{
    document.document.querySelector('audio').play;
})
// function setTime() {
//     const time = new Date();
//     const month = time.getMonth();
//     const day = time.getDay();
 //     const date = time.getDate()
//     const hours = time.getHours();
//     const hours24 =  hours % 12; //this function is useful for a 12 hour clock
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();

//     hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hours24, 0, 11, 0, 360)}deg);`
//     minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg);`
//     minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg);`

//     timeElement.innerHTML = `${hours24}:`
// }
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    //const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
   // const ampm = hours >= 12 ? 'PM' : 'AM'

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 23, 0, 360)}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeElement.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


setTime();

setInterval(setTime, 1000);