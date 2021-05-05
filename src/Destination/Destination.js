import React from 'react';
import './Destination.css'
import map from '../images/Map.png'
const Destination = () => {
    return (
        <div className='des-container'>
        

          <div className='pick-container'>
           <h5>Pick From</h5>
           <input type="text" placeholder=''/>
           <h5>Pick Too</h5>
           <input type="text" placeholder=''/>
          </div>
          <div className='map'>
             <img src={map} alt=""/>
          </div>
        </div>
    );
};

export default Destination;