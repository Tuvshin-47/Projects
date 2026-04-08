function fetchPokemons() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';

    try {

        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const results = data.results;
                const pokemonDetailsPromises = results.map((p) => {
                    return fetch(p.url).then((response) => response.json());
                })

                Promise.all(pokemonDetailsPromises)
                    .then((response) => {
                        document.getElementById('loading').style.display = 'none';
                        const pokemonGrid = document.getElementById('pokemonGrid');

                        response.forEach((pokemon) => {
                            const card = document.createElement('div');
                            card.className = 'pokemon-card';
                            card.innerHTML = `
                                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                                <h3>${pokemon.name}</h3>
                                <p>ID: ${pokemon.id}</p>
                                <p>Height: ${pokemon.height * 10} cm</p>
                                <p>Weight: ${pokemon.weight / 10} kg</p>
                            `;
                            pokemonGrid.appendChild(card);
                        });
                    })


            })

    } catch (error) {
        document.getElementById('loading').textContent = 'Error occurred ' + error.message;
    }
}

setTimeout(fetchPokemons, 3000);