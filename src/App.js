import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Form from './Components/Form'
import { getResponse } from './api-calls';

function App() {
  const [userPrompt, setUserPrompt] = useState('')
  const [response, setResponse] = useState('')

  // useEffect(() => {
  //   getResponse(userPrompt)
  //     .then(data => setResponse(data))
  // }, userPrompt)

  const storeUserPrompt = (prompt) => {
    setUserPrompt(prompt.event)
    getResponse(userPrompt)
      .then(data => setResponse(data))
  }

  return (
    <>
      {console.log('user prompt in app', userPrompt)}
      <h1>AI Assitant</h1>
      <p>Welcome Message</p>
      <Form storeUserPrompt={storeUserPrompt} />
    </>
  );
}

export default App;
