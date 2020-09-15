import React from 'react';
import './profileDetails.css';
import imgAvatar from '../images/imgAvatar.jpeg';
import { Sociallinks } from '../components/Social-links/social-links';
import {Header} from '../components/Header/header';
import {Button} from '../components/Button/button';

export const ProfileDetails=()=>{
    return(
        <div>
        <Header text="Profile"/>
        <div className="container">
            <img className="profile-details-img" src={imgAvatar}/>  
            <p className="profile-details-name">Kunal Moharkar</p>   
            <Sociallinks />
            <div className="profile-details-links-container">
                <Button text="Check out my CV"/>
                <Button text="Check out my Blog"/>    
            </div>    
            <div className="profile-details-about-container">
                <h2 className="profile-details-header">About</h2>
                <p className="profile-details-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
                </p>
            </div> 
            <div className="profile-details-projects-container">
                <h2 className="profile-details-header">Projects</h2>
                        <h4>Project-title</h4>
                        <p className="profile-details-text">
                         t to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
                        </p>
                        <h4>Project-title</h4>
                        <p className="profile-details-text">
                         pe and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
                        </p>   
            </div> 
            <div className="profile-details-skills-container">
                <h2 className="profile-details-header">Skills</h2>
                <div className="skills-tag-container">
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>Leadership</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>Programming</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                    <div className="skills-tag">
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>  
        </div>  
    )
}