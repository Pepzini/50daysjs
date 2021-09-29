const fillBox = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.emptyBox');

fillBox.addEventListener('dragstart', dragStart);
fillBox.addEventListener('dragend', dragEnd);

for (const emptyBox of emptyBoxes) {
    emptyBox.addEventListener('dragover', dragOver);
    emptyBox.addEventListener('dragenter', dragEnter);
    emptyBox.addEventListener('dragleave', dragLeave);
    emptyBox.addEventListener('drop', dragDrop);
}

function dragStart() {
   this.className += ' hold';
   setTimeout(() => {this.className = 'invisible '}, 0);
}

function dragEnd() {
    this.className = 'fill';
}
function dragOver(event) {
   event.preventDefault();
}
function dragEnter(event) {
    event.preventDefault();
    this.className += ' hovered'
}
function dragLeave() {
    this.className += 'emptyBox'
}
function dragDrop () {
   this.className = 'emptyBox';
   this.append(fillBox);
}
