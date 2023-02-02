import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
        <form action="" method="post">
            <label>Name</label>
            <input type="text" />
            <label>E-mail</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder='Write us a message ...'></textarea>
            <button type='submit' className='btn'>Send</button>
        </form>
    </div>
  )
}

export default Form