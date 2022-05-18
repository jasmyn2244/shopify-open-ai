import React from "react";
import '../Styles/Header.scss'
import icon from '../Assets/roboticon.png'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={icon} alt='robot-icon' className='icon' />
        <h1 className='heading'>AI Assistant</h1>
      </div>
      <div className='welcome-message'>
        <p data-cy='welcome-message'>Hello! I'm your AI assistant. You can ask me anything and I'll do my best to help. The more specific and descriptive you are, the better I can serve you. Here are some examples of things you can request:</p>
        <ul>
          <li>How can I be the best intern?</li>
          <li>How do I get Shopify to hire me?</li>
          <li>Please write me a poem about summertime</li>
        </ul>
      </div>
    </>
  )
}

export default Header