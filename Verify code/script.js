const codes = document.querySelectorAll('.code');

codes[0].focus(); //this allows the first box to be alighted when the user viits this page

codes.forEach((code, index) => {
    code.addEventListener('keydown', (event) => {
        if (event.key >= 0 && event.key <= 9) {
            codes[index].value = '';
            setTimeout(() =>
                codes[index + 1].focus(), 10);
            //this code allows user to moe to the next box once a number is entered
        } else if (event.key === 'Backspace') {
            setTimeout(() =>
                codes[index - 1].focus(),
                10);
        }

    })
});
