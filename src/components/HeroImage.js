import React from 'react';
import './HeroImage.css';

const HeroImage = ({heading, text}) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImage