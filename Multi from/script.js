const steps = Array.from(document.querySelectorAll('.step'));
const nextButton = document.querySelectorAll('.next-button');
const previousButton = document.querySelectorAll('.previous-button');
const form = document.querySelector('form');

nextButton.forEach(button => {
    button.addEventListener('click', ()=>{
        changeStep('next');
    });
});
previousButton.forEach(button => {
    button.addEventListener('click', ()=>{
        changeStep('previous');
    });
});
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach((input)=> {
        const { name, value} = input;
        inputs.push({ name, value});
    });
    console.log(inputs);
    form.reset();
});

function changeStep(button) {
    let index = 0;
    const active = document.querySelector('.active')
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if (button === 'next') {
        index++
    } else if(button === 'previous'){
        index--
    }
    steps[index].classList.add('active')
}