const jokeElement = document.getElementById('joke');
const buttons = document.getElementById('jokeBtn');
buttons.addEventListener('click', generateBreakfast)
generateBreakfast();

function generateBreakfast() {
    const config = {
        headers: {
            Accept : 'application/JSON',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((response) => response.json())
    .then((data) => {
        jokeElement.innerHTML = data.joke
    })
}
