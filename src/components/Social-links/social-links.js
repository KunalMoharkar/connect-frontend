import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social-links.css';

export const Sociallinks=(props)=>{
    return(
            <div className="social-links-container">
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" color="black"/>
                </a>    
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="blue"/>
                </a>
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon icon={['fab', 'instagram-square']} size="2x" color="red"/>
                </a>
            </div>
    )
}