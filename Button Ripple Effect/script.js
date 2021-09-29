const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button=> {
    button.addEventListener('click', function (event)  {
        const x = event.clientX;
        const y = event.clientY;
        //the client X and Y gets the axis of a selected element
       
        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft ;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
});
//NB:if a forEach function returns not a function it is probably because 
//it can not access the element selected