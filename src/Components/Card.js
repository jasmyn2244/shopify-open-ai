import React from 'react'
import '../Styles/Card.scss'

const Card = ({ prompt, response }) => {
  return (
    <div className='card'>
      {console.log('prompt and response in Card', prompt, response)}
      <p>Prompt: {prompt}</p>
      <p>Response: {response}</p>
    </div>
  )
}

export default Card