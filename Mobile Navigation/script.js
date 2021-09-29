const contents = document.querySelectorAll('.content');
const itemLists = document.querySelectorAll('li');

itemLists.forEach((item, index) => {
    item.addEventListener('click', () =>{
         removeActiveClass();
         removeAllContents()
        item.classList.add('active');
        contents[index].classList.add('show');
    })
});

function removeActiveClass() {
    itemLists.forEach(item => {
        item.classList.remove('active')
    });
}
function removeAllContents() {
    contents.forEach(content => {
        content.classList.remove('show')
    });
}

