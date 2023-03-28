import React from 'react'
import "./card.scss"


const Card = ({
  title,
  description,
  thumbnail
}) => (
  <div className='card'>
    <div className='image-container'>
      <img className='card-image' src={thumbnail} />
    </div>
    
    <div className='card-content'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
      <a className='see-more' href='#'>See More...</a>
    </div>
  </div>
)
export default Card;