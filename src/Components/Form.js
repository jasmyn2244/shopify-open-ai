import React, { useState } from "react";
import '../Styles/Form.scss'

const Form = ({ storeUserPrompt }) => {
  const [userPrompt, setUserPromt] = useState('')

  const handleChange = (event) => {
    setUserPromt(userPrompt => ({
      ...userPrompt, event
    }))
  }

  const submitPrompt = (event) => {
    event.preventDefault()
    storeUserPrompt(userPrompt)
  }

  return (
    <>
      <form className='form'>
        <input type='text' id='userPrompt' className='input' placeholder='Type a request' onChange={event => handleChange(event.target.value)}></input>
        <div className='button-border'>
          <button className='submit-button' type='submit' onClick={submitPrompt}>Submit</button>
        </div>
      </form >
    </>

  )
}


export default Form 