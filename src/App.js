import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Form from './Components/Form'

function App() {
  const [userPrompt, setUserPrompt] = useState('')
  const [aiResponse, setAiResponse] = useState('')

  // useEffect(() => {
  //   getAiResponse(userPrompt)
  // }, userPrompt)

  const storeUserPrompt = (prompt) => {
    setUserPrompt(prompt.event)
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
