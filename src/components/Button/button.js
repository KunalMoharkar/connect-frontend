import React from 'react';
import './button.css';

export const Button=(props)=>{
    return(
      <button className="btn">
          <span>{props.text}</span>
      </button>
    )
}