const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentageCount = document.getElementById('percentage');
const remainingLitres = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
});
//the function below fills the cup on click 
function highlightCups(index) {
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling
    .classList.contains('full')) {
        index--
    } 
    //the first if statement allows you to unhight even to the every last cup

    smallCups.forEach((cup, numberOfCups) => {

        if (numberOfCups <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
   

    if (fullCups === 0) {
        percentageCount.style.visibility = 'hidden';
        percentageCount.style.height = '0';
    } else {
        percentageCount.style.visibility = 'visible';
        percentageCount.style.height = `${fullCups / totalCups * 280}px `
        percentageCount.innerText = `${fullCups / totalCups * 100}% `
    }
    if (fullCups === totalCups) {
        remainingLitres.style.visibility = 'hidden';
        remainingLitres.style.height = 0;
    } else {
        remainingLitres.style.visibility = 'visible';
        litres.innerText =`${2 - (250 * fullCups / 1000)} litres`
    }
}