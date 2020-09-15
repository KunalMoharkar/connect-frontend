import React from 'react';
import {Profilecard} from '../components/Profilecard/profilecard';
import './home.css';
import {Navbar} from '../components/Navbar/navbar';
import {Footer} from '../components/Footer/footer';
import {Header} from '../components/Header/header';

export const Home=()=>{
    return(
        <div>
            <Navbar />
            <Header text="Profiles"/>
            <div className="home-container">
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
            </div>
            <Footer />
        </div>
    )
}