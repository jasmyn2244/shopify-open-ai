import React from 'react'
import Card from './Card'

const CardContainer = ({ data }) => {
  let uniqueKey = 0
  let cards = []
  console.log('data in card container, ', data)
  if (data.length) {
    cards = data.map(data => {
      uniqueKey++
      console.log('prompt prop', data)
      return (
        <Card
          key={uniqueKey}
          prompt={data.prompt}
          response={data.response}
        />
      )
    })
  }

  return (
    <div>
      {cards}
    </div>
  )

}


export default CardContainer