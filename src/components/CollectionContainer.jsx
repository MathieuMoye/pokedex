import React from 'react'
import PokemonList from './PokemonList';
import '../styles/collectioncontainer.css'

function CollectionContainer(props) {

    const { pokemons } = props;
  return (
    <section className='collection-container'>{
        pokemons.map((pokemon) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <PokemonList 
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                />
            )
        })}
    </section>
  )
}

export default CollectionContainer;