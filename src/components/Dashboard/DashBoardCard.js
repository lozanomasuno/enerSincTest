import React from 'react'
import { PropTypes } from 'prop-types'

export const DashBoardCard = ({title, subtitle, className}) => {
  
  

  return (
    <div className =  { className  }>
        <p> { subtitle } </p>   
        <label>{ title }</label>   
    </div>
  )
}

DashBoardCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}