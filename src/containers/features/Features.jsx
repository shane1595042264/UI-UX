import React from 'react';
import './features.css'; 
const Feature = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
<h1 className='gradient__text'>
    Make It Happen
</h1>
<p>
    Request early access.
</p>
            </div>
            <div className='gpt3__features-container'>
                <Feature/>
                <Feature/>
                <Feature/>
                <Feature/>  
            </div>
        </div>
    )
}

export default Feature
