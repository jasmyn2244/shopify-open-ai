import React from 'react'
import icon from '../Assets/roboticon.png'
import '../Styles/Error.scss'

const Error = () => {
  return (
    <div className='error-container'>
      <img src={icon} alt='robot-icon' className='error-robot' />
      <p className='error-message'>Oops! Looks like something went wrong. Please refresh the page and try again.</p>
      )
    </div>
  )
}

export default Error