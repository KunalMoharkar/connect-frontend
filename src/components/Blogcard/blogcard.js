import React from 'react';
import { Button } from '../Button/button';
import './blogcard.css';

export const Blogcard=(props)=>{
    return(
        <div className="blogcard-container">
            <div className="blogcard-header">
                <h1>Title</h1>
            </div>
            <div className="blogcard-body">
                <p>some text is more important than some others that aihfosjhafhlksfh hhfjsfk sahufihuafjka afjafkaja fajjsajkajfa uhafhjiafhiahfiafna ihKHkhghGHKg  GgkKGkg kngENKGENKegkEGKJe .......</p>
            </div>
            <div className="blogcard-footer"> 
                <Button text="Read more"/>
                <p>-Kunal Moharkar</p>
            </div>       
        </div>    
    )
}