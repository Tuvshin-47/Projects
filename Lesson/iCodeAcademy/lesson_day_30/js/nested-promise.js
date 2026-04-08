console.log('nested fetch API call');

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

const pokemonContainer = document.querySelector('.pokemon-container');

console.log(pokemonContainer);

fetch(POKEMON_URL)
    .then((response) => response.json())
    .then((data) => {
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
            // console.log(results[i]);
            // Одоо би шинээр html дээрээ харуулъя

            const pokemonDetailURL = results[i].url;
            fetch(pokemonDetailURL)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                   
                    pokemonContainer.innerHTML += `
                    <div class="pokemon-card" style="background-color: ${pokemonTypes[data.types[0].type.name]}">
                        <h1>${results[i].name}</h1>
                        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" />
                    </div>
                    
                `;
                })
        }


    });

const pokemonTypes = {
    grass: '#1EBA11',
    steel: '#448F85',
    water: '#009ACB',
    bug: '#91AC22'
}

console.log(pokemonTypes['grass']);