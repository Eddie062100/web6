import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'



const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const responseA = await axios.get('http://localhost:9009/api/people')
        const charactersData = responseA.data;

        const responseB = await axios.get('http://localhost:9009/api/planets')
        const planetsData = responseB.data;

        const combinedData = charactersData.map(character => {
          const homeworld = planetsData.find(planet => planet.id === character.homeworld)
          return { ... character, homeworld }
        });

        setCharacters(combinedData)
      } catch (error) {
        console.error('whoops', error)
      }
    };

    fetchData()
  }, [])


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => (
        <Character key={character.id} character={character}/>
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
