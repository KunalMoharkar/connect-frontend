import React from 'react';
import './header.css';


export const Header=(props)=>{
    return(
    <div className="header">
        <h2>{props.text}</h2>
    </div> 
    )   
}