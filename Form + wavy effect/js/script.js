const labels = document.querySelectorAll('.form-control label');

labels.forEach( label => {
   label.innerHTML = innerText
   .split('').map((letter,index) =>`<span>${letter}</span>`).join('')

})