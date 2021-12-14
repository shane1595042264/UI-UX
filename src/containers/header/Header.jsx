import React from 'react';
import './header.css'; 
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className='gpt3__header-content'>
            <h1 className='gradient__text'> 
            Learn Sign Language with AI
            </h1>
            <p>
                I got rejected from CMU.
            </p>
            <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Your Email Address'/>
                <button type='button'>Get Started</button>
            </div>
            <div className='gpt3__header-content__people'>
                <img src={people} />
                <p>
                    1600 people requested access in last 24 hours
                </p>
            </div>
            </div>
            
            <div className='gpt3__header-image'>
                <img src={ai}/>
            </div>
        </div>
    )
}

export default Header;
