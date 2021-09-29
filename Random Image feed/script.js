const imageContainer = document.getElementById('container');

const unsplashURL = 'https://source.unsplash.com/random/';
const numberOfRows = 10;

for (let index = 0; index < numberOfRows * 3; index++) {
    const image = document.createElement('img');
    image.src = `${unsplashURL}${getRandomImageSize()}`;  
    imageContainer.appendChild(image)
}

function getRandomImageSize() {
    return `${getRandomImageNumber()}*${getRandomImageNumber()}`
}
function getRandomImageNumber() {
    return Math.floor(Math.random() * 10) + 300
}