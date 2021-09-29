const container = document.getElementById('container')
const colors = ['plum','oldlace','papayawhip','yellow',
'indianred','blueviolet','red','rebeccapurple','gold',
'seagreen','slateblue', 'skyblue', 'hotpink', 'salmon'];

const squares = 448;

for (let index = 0; index < squares; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);

   
}
function setColor(hoverSquare) {
   const color = getRandomColor();
   hoverSquare.style.background = color;
   hoverSquare.style.boxShadow = `0 0 2px ${color} 0 0 12px ${color}` 
}
function removeColor(hoverSquare) {
   hoverSquare.style.background = '#313030';
   hoverSquare.style.boxShadow = `0 0 2px #000` 
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
