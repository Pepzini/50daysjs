const api_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b574552a56f512c3c973e624c9156264';
const img_path = 'https://image.tmdb.org/t/p/w1280';
//the search endpoint
const search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=b574552a56f512c3c973e624c9156264&query="';
const search = document.getElementById('search');
const form = document.getElementById('form');
const mainPage = document.getElementById('main');
//creating a request to fetch the api
getMovies(api_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    //await response.json is what returns the data
    showMovies(data.results);
}

function showMovies(movies) {
    mainPage.innerHTML = '';

    movies.forEach((movie) => {
        //pulling values out of the movies using the object name
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${img_path + poster_path}" alt = "${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div> `
            //the append child function allows you to display it on the page
            mainPage.appendChild(movieElement);
    });
}

function getClassByRate(vote) {
    if (vote >= 8 ) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

//eventlistener is added to the search form 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //the preventDefault() method prevents the from from being submitted
    const searchTerm = search.value;
    //checking to see if search term exist and returning a value from the search api
    if (searchTerm && searchTerm !== '') {
        getMovies(search_Url + searchTerm);
        //clear search 
        search.value = '';
    } else {
        window.location.reload(); //reloads page
    }
})

//home-work, create a function that takes you to another page when you click on it
