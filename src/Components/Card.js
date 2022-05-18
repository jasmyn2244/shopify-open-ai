import React from 'react'

const Card = ({ prompt, response }) => {
  return (
    <div>
      {console.log('prompt and response in Card', prompt, response)}
      <p>{prompt}</p>
      <p>{response}</p>
    </div>
  )
}

export default Card