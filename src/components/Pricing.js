import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  return (
    <div>
        <div className="card-container">

            <div className="card">
                <h3>Base Package</h3>
                <span className="bar"></span>
                <p className='btc'>1 BTC</p>
                <p>3 days</p>
                <p>3 meals/day</p>
                <p>Private Room</p>
                <Link to='/contact' className="btn">Book</Link>
            </div>

            <div className="card">
                <h3>Extra Package</h3>
                <span className="bar"></span>
                <p className='btc'>2 BTC</p>
                <p>5 days</p>
                <p>Base Package +</p>
                <p>Spacewalk</p>
                <Link to='/contact' className="btn">Book</Link>
            </div>

            <div className="card">
                <h3>Super Package</h3>
                <span className="bar"></span>
                <p className='btc'>5 BTC</p>
                <p>10 days</p>
                <p>Extra Package +</p>
                <p>Luxury private Room</p>
                <p>Private Meeting with Elon Musk</p>
                <Link to='/contact' className="btn">Book</Link>
            </div>

        </div>
    </div>
  )
}

export default Pricing