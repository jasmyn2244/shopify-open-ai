import React, { useState } from "react";

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
      {/* {console.log('userPrompt', userPrompt)} */}
      <form>
        <input type='text' id='userPrompt' name='user_prompt' placeholder='type any request' onChange={event => handleChange(event.target.value)}></input>
        <button type='submit' onClick={submitPrompt}>Submit</button>
      </form >
    </>

  )
}


export default Form 