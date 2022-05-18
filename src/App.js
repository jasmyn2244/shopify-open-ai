import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Form from './Components/Form'
import { getResponse } from './api-calls';
import CardContainer from './Components/CardContainer';

function App() {
  const [userPrompt, setUserPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [promptsAndResponses, setPromptsAndResponses] = useState([])


  const storeUserPrompt = (prompt) => {
    setUserPrompt(prompt.event)
    getResponse(prompt.event)
      .then(data => setResponse(data))
      .then(setPromptsAndResponses(...promptsAndResponses, { prompt: userPrompt, response: response }))
  }

  return (
    <>
      {console.log('user prompt in app', userPrompt)}
      <h1>AI Assitant</h1>
      <p>Welcome Message</p>
      <Form storeUserPrompt={storeUserPrompt} />
      <CardContainer data={promptsAndResponses} />
    </>
  );
}

export default App;
