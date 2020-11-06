import React,{ useEffect, useState }from 'react';
import axios from "axios"
import { BASE_URL, LISTM } from './constants/constants'
import './App.css';
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const[pokemonList, setPokemonList]= useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${ BASE_URL }${ LISTM }`)
      .then((res) => {
        setPokemonList(res.data.results)
      })
      .catch((fuzz) => {
        console.log(fuzz)
      })
  })
  const openDetails = id => {
    
  }
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="Char-cov">
        {
          pokemonList.map((pk) => {
            return <Character name={pk.name} url={pk.url}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
