import React from 'react'
import {Link} from 'react-router-dom';
import Pod from '../assets/pod.jpg';
import Moon from '../assets/moon.jpg';
import './Training.css';


const Training = () => {
  return (
    <div className='training'>

        <div className="left">
            <h1>Training</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit, odio aliquam est asperiores aliquid illum laboriosam facere quis at?</p>
            <Link to='/contact'> <button className='btn'>Contact</button></Link>
        </div>

        <div className="right">
            <div className="image-container">
                <div className="image-stack top">
                    <img src={Moon} alt="moon" className='img' />
                </div>

                <div className="image-stack bottom">
                    <img src={Pod} alt="pod" className='img' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Training