import React from 'react';
import './profilecard.css';
import imgAvatar from '../../images/imgAvatar.jpeg';
import {Button} from '../Button/button';
import {Sociallinks} from '../Social-links/social-links';

export const Profilecard = ()=>{
    return(
        <div className="profile-card-container">
            <div className="profile-card-header">
                <img className="profile-card-img" src={imgAvatar}></img>
            </div> 
            <div className="profile-card-body">
                <p>Kunal Moharkar</p>  
                <Sociallinks/>
            </div>
            <div className="profile-card-footer"> 
                <Button text="View Profile"/>
            </div>   
        </div>
    )
}