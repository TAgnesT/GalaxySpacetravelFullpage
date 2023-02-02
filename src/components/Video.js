import React from 'react';
import spacevideo from '../assets/space.mp4';
import { Link } from 'react-router-dom';
import "./Video.css";

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id="video">
            <source src={spacevideo} type="video/mp4" />
        </video>

        <div className='content'>
            <h1>Galaxy Space Travel</h1>
            <p>First space traveling agency</p>
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video