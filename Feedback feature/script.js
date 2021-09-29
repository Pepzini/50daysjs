const ratings = document.querySelectorAll('.emoji');
const ratingsContainer = document.querySelector('.ratings-conatiner');
const submitReivew= document.getElementById('submit-review');
const feedbackPanel = document.querySelector('.feedback-container')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (event) =>{
    if (event.target.parentNode.classList.contains('emoji')){
        removeActive();
        event.target.parentNode.classList.add('active');
        selectedRating = event.target.nextElementSibling.innerHTML;
    }
});

submitReivew.addEventListener('click', (event) =>{
    feedbackPanel.innerHTML = `
      <i class = "fas fa-heart"></i>
      <strong>Thank you</strong>
      <h3>Your Feedback is: ${selectedRating}</h3>
      <p>Your feedback has been received, we aare working hard to make you happy.</p>
    `
})
function removeActive(params) {
    for (let index = 0; index < ratings.length; index++) {
       ratings[index].classList.remove('active')
        
    }
}