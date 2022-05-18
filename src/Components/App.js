import React, { useState } from 'react';
import '../Styles/App.scss';
import Form from './Form'
import { getResponse } from '../api-calls';
import CardContainer from './CardContainer';
import Error from './Error'
import Header from './Header'


function App() {
  const [promptsAndResponses, setPromptsAndResponses] = useState([])
  const [error, setError] = useState('')

  const storeUserPrompt = (prompt) => {
    getResponse(prompt.event)
      .then(data => {
        setPromptsAndResponses(promptsAndResponses.concat({ prompt: prompt.event, response: data.choices[0].text }))
      })
      .catch(error => setError(error))
  }

  if (error) {
    return (
      <Error />
    )
  } else {
    return (
      <>
        <Header />
        <Form storeUserPrompt={storeUserPrompt} />
        <CardContainer data={promptsAndResponses} />
      </>
    );
  }
}


export default App
