
import React from 'react'
import PokemonList from './PokemonList';

function CollectionContainer(props) {

    const { pokemons } = props;

  return (
    <section className='collection-container'>{
        pokemons.map((pokemon) => {
            return (
                <PokemonList 
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                />
            )
        })}
    </section>
  )
}

export default CollectionContainer;