const sliderContainer = document.querySelector('.slider-container');
const rightSlider = document.querySelector('.right-slide');
const leftSlider = document.querySelector('.left-slide');
const topButton = document.querySelector('.buttonUp');
const buttomButton = document.querySelector('.buttonDown');
const numberOfSlides = rightSlider.querySelectorAll('div').length; //this selects each slides in the right slider

let activeSlideIndex = 0;

leftSlider.style.top = `-${(numberOfSlides - 1) * 100}vh`;

topButton.addEventListener('click', () => changeSlide('up'));
buttomButton.addEventListener('click', () => changeSlide('up'));

const changeSlide = (direction) => {
    sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > numberOfSlides - 1) {
            activeSlideIndex = 0;
        }
    }

    rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}