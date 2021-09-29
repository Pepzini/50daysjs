const Numbers = document.querySelectorAll('.numbers span');
const counters = document.querySelector('.counter');
const finalMessage = document.querySelector('.go');
const replay = document.getElementById('replay');

runAnimation();
function replayDom() { //allow the reply to function
    counters.classList.remove('hide')
    finalMessage.classList.remove('show')

    Numbers.forEach(number => {
        number.classList.value = '';

    })
   Numbers[0].classList.add('in') //resets to inital state 
}; 
function runAnimation() {
    Numbers.forEach((number, index) => {

        const firstToLast = Numbers.length - 1;

        number.addEventListener('animationend', (event) => { //an eventHandler for when the animation ends
            if (event.animationName === 'goIn' && index != firstToLast) {
                number.classList.remove('in')
                number.classList.add('out')
            } else if (event.animationName === 'goOut' &&
                number.nextElementSibling) {
                number.nextElementSibling.classList.add('in')
            } else {
                counters.classList.add('hide')
                finalMessage.classList.add('show')
            }

        })
    });
}
replay.addEventListener('click', () =>{
    replayDom();
    runAnimation();
})