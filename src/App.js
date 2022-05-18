import React, { useState } from 'react';
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
      .then(data => {
        setResponse(data.choices[0].text)
        setPromptsAndResponses(promptsAndResponses.concat({ prompt: prompt.event, response: data.choices[0].text }))
      })
  }

  return (
    <>
      {/* {console.log('prompts and responses array in app', promptsAndResponses)} */}
      <h1>AI Assitant</h1>
      <p>Hello! I'm your AI assistant. You can ask me anything and I'll do my best to help. The more specific and descriptive you are, the better I can serve you. Here are some examples of things you can request:</p>
      <ul>
        <li>How can I be the best intern?</li>
        <li>How do I get Shopify to hire me?</li>
        <li>How do I fix bugs in my code?</li>
      </ul>
      <Form storeUserPrompt={storeUserPrompt} />
      <CardContainer data={promptsAndResponses} />
    </>
  );
}

export default App;
