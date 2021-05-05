import React ,{ Component } from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Header = (props) => {

    // const btnStyle= {padding:'5px 20px',
    // backgroundColor:'red',color:'white'}


    return (
        <div className='header'>
            <div className='header-Name'>
            <a class="logo" to="#">SIFAT RIDERS</a>
             </div>
             
            <nav className='header-item'>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link className='btnStyle' to="/login">login</Link>
            
            </nav>
            
        </div>
    );
};

export default Header;