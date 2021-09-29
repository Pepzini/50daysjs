const loveMe = document.querySelector('.card-header');
const times = document.getElementById('times');

let timesClicked = 0;

loveMe.addEventListener('dblclick', (event) =>{
    createHeart(event)
})

function createHeart(event) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const xAxis = event.clientX;
    const yAxis = event.clientY;

    const leftOffset = event.offsetLeft;
    const topOffset = event.offsetTop;

    const xInside = xAxis - leftOffset;
    const yInside = yAxis - topOffset;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;
}