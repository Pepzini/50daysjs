const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
//initialize the active slide to start at zero
let activeSlide = 0 ;

//add am event lstener to each button, decrement the left by 1 
//and increase the right by 1
rightButton.addEventListener('click', () => {
    activeSlide++
//creating an if stament for when the user reaches the end of the slides   
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
   setBackgroundImageToBody();
   setActiveSlide();
})
leftButton.addEventListener('click', () => {
    activeSlide--
//creating an if stament for when the user reaches the end of the slides   
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
   setBackgroundImageToBody();
   setActiveSlide();
})

//set the background of the body to the image of the slider
setBackgroundImageToBody();
function setBackgroundImageToBody() {
    body.style.backgroundImage = slides[activeSlide].style.
    backgroundImage;
}
function setActiveSlide(p) {
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active')
}