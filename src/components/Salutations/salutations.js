import React from 'react';
import imgAvatar from '../../images/imgAvatar.jpeg';
import {Button} from '../Button/button';
import './salutations.css';

export const Salutation=(props)=>{
    return(
        <div className="salutations-container">
            <img src={imgAvatar}/>
            <div className="salutations-links-container">
            <p>-Kunal Moharkar</p>    
            <Button text="View Profile"/>
            </div>
        </div>   
    )
}