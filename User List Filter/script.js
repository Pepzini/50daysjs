const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input',(event)=>{
    filterData(event.target.value)
})
async function getData(){
    const response = await fetch('https://randomuser.me/api?results=250');

    const { results } = await response.json();
    //clear results
    result.innerHTML = ''; //this clears the animation after the data loads

    results.forEach(user => {
        console.log(user);
       const list = document.createElement('li') 

       listItems.push(list);

       list.innerHTML = `
       <img src="${user.picture.large}" alt="${user.name.first}">
       <div class="user-info">
           <h4 class="name">${user.name.first} ${user.name.last}</h4>
           <p>${user.location.city}, ${user.location.country}</p>
       </div>`

       result.appendChild(list)
    });
}

function filterData(searchTerm){
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide'); 
        } else{
            item.classList.add('hide'); 
        }
    });
}

// asyn function getDrinks() {
//     const response = await fetch('https://randomuser.me/api?results=250');

//     const { drinks } = await response.json();
// }