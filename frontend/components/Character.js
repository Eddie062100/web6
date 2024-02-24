import React, { useState } from 'react'


  const Character = ({character}) => {
    const [showHomeworld, setShowHomeworld] = useState(false)
  
  
    const toggleHomeworld = () => {
      setShowHomeworld(prevState => !prevState)
    };

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{character.name}</h3>
      {showHomeworld && (
        <p>
          Planet: 
          <span className='character-planet'> {character.homeworld.name}</span>
        </p>
      )}
    </div>
  )
      }


export default Character
