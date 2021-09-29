const card = document.getElementById('card')
const api_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

getCocktail(api_URL);

async function getCocktail(url) {
    const response = await fetch(url);
    const data = await response.json();

    showCocktail(data);
}

function showCocktail(drinks) {
    card.innerHTML = 'data.drinks';
   const {strDrink, strAlcoholic } = drinks;
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
    <div class="card-header">
    <img src="${cardImage}" alt="${strDrink}" >
    </div>
    <div class="card-body">
    <h4>Category : ${strAlcoholic}</h4>
    </div>
    `
    card.appendChild(cardElement)
}