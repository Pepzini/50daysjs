const boxesContainer = document.getElementById('boxes');
const magicButton = document.getElementById('button');

magicButton.addEventListener('click', () =>{
    boxesContainer.classList.toggle('big')
})

function createBoxes() {
    //this lope below is creating a number of 4 rows
    for (let row = 0; row< 4; row++) {
        for (let column = 0; column < 4; column++) {
            const box = document.createElement('div')
            box.classList.add('box');
            box.style.backgroundPosition = `
            ${-column * 125}px ${-row * 125}px
            `
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes();