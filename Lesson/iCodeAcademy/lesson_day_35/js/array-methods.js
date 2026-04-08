console.log('Array methods');

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
let globalData = [];
const pokemonContainer = document.getElementById('pokemonContainer');
// function expression = arrow function
const renderPokemon = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemon-card';
    const pokemonTitle = document.createElement('h2');
    pokemonTitle.textContent = `${pokemon.name}`;
    const pokemonImage = document.createElement('img');
    pokemonImage.style.width = '250px';
    pokemonImage.style.height = '250px';
    pokemonImage.src = `${pokemon.sprites.other['official-artwork'].front_default}`;
    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);
    pokemonContainer.appendChild(pokemonCard);
}
// function declaration
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    const pokemonDetails = results.map(async (result) => {
        const detailResponse = await fetch(result.url);
        const detailData = await detailResponse.json();
        return detailData;
    })

    globalData = await Promise.all(pokemonDetails);
    pokemonContainer.innerHTML = '';
    globalData.forEach((data) => renderPokemon(data));
}

// funciton expression = anonymous function
const searchPokemon = function () {
    const search_input = document.getElementById("search-input");
    const inputValue = search_input.value;
    let sumOfPokemons = [];
    // search by name function
    const searchByNameResults = searchByName(inputValue);
    console.log(searchByNameResults);
    sumOfPokemons.push(...searchByNameResults);

    const searchByTypeResults = searchByType(inputValue);
    sumOfPokemons.push(...searchByTypeResults);
    console.log(searchByTypeResults);

    pokemonContainer.innerHTML = '';
    sumOfPokemons.forEach((result) => renderPokemon(result));
}
function searchByType(searchType) {
    const typeResults = globalData.filter((pokemon) => {
        const pokemonTypes = pokemon.types;
        const pokemonType = pokemonTypes[0].type.name;
        console.log(pokemonType)
        let pokemonType2 = '';
        if (pokemonTypes.length > 1) {
            pokemonType2 = pokemonTypes[1].type.name;
        }

        if (pokemonType.includes(searchType) || pokemonType2 && pokemonType2.includes(searchType)) {
            return pokemon;
        }
    });

    return typeResults;
}

function searchByName(name) {
    console.log(name);
    return globalData.filter((pokemon) => pokemon.name.includes(name))
}

fetchData(POKEMON_URL)