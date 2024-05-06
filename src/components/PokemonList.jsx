import React from 'react'
import '../styles/pokemonList.css'

function PokemonList(props) {

    const { id, name, image, type } = props
  return (
        <section className='list-container'>
            <p className='list-id'># {id}</p>
            <p className='list-name'>{name}</p>
            <img src={image} alt={name}/>
            <p className='list-type'>type: {type}</p>
        </section>
  )
}

export default PokemonList