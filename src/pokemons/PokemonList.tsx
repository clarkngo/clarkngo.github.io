import React from "react";
import { Pokemon } from './Pokemon';

interface PokemonListProps {
    pokemons: Pokemon;
}

function PokemonList( { pokemons }: PokemonListProps ) {
    return <pre>{JSON.stringify(pokemons, null, ' ')}</pre>
}

export default PokemonList;