import React from 'react'

function PokemonList(props) {

    const { id, name, image, type } = props
  return (
    <div>
        <section>
            <p>#{id}</p>
            <p>{name}</p>
            <img src={image} alt={name}/>
            <p>type: {type}</p>
        </section>
    </div>
  )
}

export default PokemonList