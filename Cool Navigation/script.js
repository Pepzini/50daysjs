const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const navigation = document.querySelectorAll('.nav');

openButton.addEventListener('click', ()=> {
    navigation.forEach(navText => navText.classList.add('visible'))
});
closeButton.addEventListener('click', () => {
    navigation.forEach(navText => navText.classList.remove('visible'))
});
