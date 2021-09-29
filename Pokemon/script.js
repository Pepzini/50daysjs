const poke_container = document.getElementById('poke-container');
const numberOfPokemanCards = 150;
const colors = {
    fairy: '#fceaff',
    dragon: '#97b3e6',
    flying: '#f5f5f5',
    normal: '#a9b5bb',
    fighting: '#e6e0d4',
    poison: '#98d7a5',
    psychic: '#eaeda1',
    rock: '#d5d5d4',
    ground: '#f4e7da',
    electric: '#fcf7de',
    water: '#f4e7da',
    bug: '#f8d5ac',
    fire: '#fddfdf'
};
const main_types = Object.keys(colors)
const fetchPokemons = async () => {
    for (let index = 1; index <= numberOfPokemanCards; index++) {
        await getPokemon(index)   
    }
}
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    createPokemonCard(data);
} 
const createPokemonCard = (pokemon) =>{
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon-card');

    //const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)//this function allows you to change it to uppercase  

    const id = pokemon.id.toString().padStart(3,'0');

    const poke_types = pokemon.types.map(type => type.type.name);
    
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    
    const color = colors[type];

    pokemonElement.style.backgroundColor = color;

    const pokemonHTMLCards = `
    
           <div class="img-container">
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
           </div>
           <div class="pokemon-info">
               <span class="number">#${id}</span>
               <h3 class="name">${pokemon.name}</h3>
               <small class="type">Type: <span>${type}</span> </small>
           </div>
     
    `
    pokemonElement.innerHTML = pokemonHTMLCards;
    poke_container.appendChild(pokemonElement)
   
}
fetchPokemons();