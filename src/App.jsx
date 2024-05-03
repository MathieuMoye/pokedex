import React ,{ useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CollectionContainer from './components/CollectionContainer';

function App() {

const [pokemons, setPokemons] = useState([])

useEffect(() => {
  const getPokemon = async () => {
     const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")

     res.data.results.forEach( async  (pokemon) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)

      setPokemons((p) => [...p, poke.data])
     })

  }
  getPokemon()
}, [])
console.log(pokemons)
  return (
    <>
      <Header />
      <div className='container'>
        <CollectionContainer pokemons={pokemons} /> 
      </div>
    </>
  )
}

export default App;
