const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    //the sets the counter to 0 and overwrites what has ben written the html
    counter.innerText = '0';
    //this update the counter from 0 to te number you have written in you data addtribute in the html files
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-attribute');

        const updatedCounter = +counter.innerText;

        const increment = target / 250;

        if (updatedCounter < target) {
            counter.innerText = Math.ceil(updatedCounter + increment);
            setTimeout(updateCounter, 1);
        } else{
            counter.innerText = target;
        }
    }

    updateCounter();
});