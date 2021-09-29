const header = document.getElementById('card-header')
const title = document.getElementById('card-title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_backgrounds = document.querySelectorAll('.animated-background')
const animated_background_texts = document.querySelectorAll('.animated-background-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        ''
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem sit corporis,doloremque consequatur quisquam quae porro atque, cumque deleniti quas eaque pariatur minima illo hicest, modi tempore reprehenderit quia mollitia incidunt dolorum!'
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/women/18.jpg" alt="" />'
    name.innerHTML = 'Olajide Niniola'
    date.innerHTML = '2nd Sept 2020'

    animated_backgrounds.forEach((background) => background.classList.remove('animated-background'))
    animated_background_texts.forEach((background) => background.classList.remove('animated-background-text'))
}