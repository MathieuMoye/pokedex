import React from 'react'
import '../styles/pokemonList.css'

function PokemonList(props) {

    const { id, name, image, type } = props
  return (
        <section className='list-container'>
            <p># {id}</p>
            <p>{name}</p>
            <img src={image} alt={name}/>
            <p>type: {type}</p>
        </section>
  )
}

export default PokemonList