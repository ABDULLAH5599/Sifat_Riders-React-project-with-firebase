import React from 'react';
import bike from '../images/Frame.png';
import car from '../images/Frame-2.png';
import bus from '../images/Frame-1.png';
import train from '../images/Group.png';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <div className='home-container'>
            <Link to='./destination'>   
             <div className='cart'>
                <img src={bike} alt=""/>
            </div>
            </Link>
            <Link to='./destination'>   
            <div className='cart'>
                <img src={car} alt=""/>
            </div>
            </Link>
            <Link to='./destination'>   
            <div className='cart'>
                <img src={bus} alt=""/>
            </div>
            </Link>
            <Link to='./destination'>   
            <div className='cart'>
                <img src={train} alt=""/>
            </div>
            </Link>
        </div>
    );
};

export default Home;