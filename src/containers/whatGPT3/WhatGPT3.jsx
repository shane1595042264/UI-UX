import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'; 
import {body, regional, origin, difference} from './text';


const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is Sign Language" text={body}/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>
Sign language is beyond language
            </h1>
            <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
            <Feature title="Regional" text={regional}/>
            <Feature title="Origin"text={origin}/>
            <Feature title="Difference" text={difference}/>
            </div>
        </div>
    )
}

export default WhatGPT3
