import React, { useEffect, useState } from "react";
import { Button, Card, Container, ErrorText, Grid, LoadingText, Name, PokemonImage, PokemonInfo, StatItem, Stats, TypeBadge } from "./styles";



const PokemonList = (): React.ReactElement => {
    const [pokemons, setPokemons] = useState<any>([]);
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const limit = 10;

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Failed to fetch pokemons');
            }

            const data = await response.json();
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon: any) => {
                    const detailResponse = await fetch(pokemon.url);
                    return detailResponse.json();
                })
            );
            setPokemons((prevPokemons: any) => [...prevPokemons, ...pokemonDetails]);
            setError(null);
        } catch (error: any) {
            // set error here
            setError('Error Fetching pokemon data' + error.message);
        } finally {
            // do something at the end
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log('effect callled');
        fetchPokemons();
    }, [offset])

    // fetchPokemons();

    const loadMore = () => {
        setOffset(prevOffset => prevOffset + limit);
    }

    if (error) {
        return <ErrorText>{error}</ErrorText>
    }

    return (
        <Container>
            <Grid>
                {pokemons.map((pokemon: any, index: number) => (
                        <Card key={index}>
                            <PokemonImage
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                            />
                            <PokemonInfo>
                                <Name>{pokemon.name}</Name>
                                <div style={{ margin: '10px 0' }}>
                                    {pokemon.types.map((type: any, index: number) => (
                                        <TypeBadge key={index} type={type.type.name}>
                                            {type.type.name}
                                        </TypeBadge>
                                    ))}
                                </div>
                                <Stats>
                                    <StatItem>HP: {pokemon.stats[0].base_stat}</StatItem>
                                    <StatItem>Attack: {pokemon.stats[1].base_stat}</StatItem>
                                    <StatItem>Defence: {pokemon.stats[2].base_stat}</StatItem>
                                    <StatItem>Speed: {pokemon.stats[5].base_stat}</StatItem>
                                </Stats>
                            </PokemonInfo>
                        </Card>
                    ))
                }
            </Grid>

            {loading && <LoadingText>Loading Pokemon ....</LoadingText>}

            <Button
                onClick={loadMore}
                disabled={loading}
            >
                Load More Pokemon
            </Button>
        </Container>
    )
}

export default PokemonList;