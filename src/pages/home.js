import React from 'react';
import {useEffect, useState} from 'react';
import {Profilecard} from '../components/Profilecard/profilecard';
import './home.css';
import {Navbar} from '../components/Navbar/navbar';
import {Footer} from '../components/Footer/footer';
import {Header} from '../components/Header/header';

export const Home=()=>{

    const [data,setData] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    const fetchData=async()=>{
        try{
            const response = await fetch('http://localhost:5000/users/');
            const data = await response.json();
            setData(data);
            setIsLoaded(true);
            console.log(data);

        }
        catch(err)
        {
            console.log("Error occured");
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div>
            <Navbar />
            <Header text="Profiles"/>
            <div className="home-container">

               

           {
           isLoaded?data.map((user)=>{
                return(
                <Profilecard key={user._id} data={user}/>
                )
            }):null
            }

            </div>
            <Footer />
        </div>
    )
}