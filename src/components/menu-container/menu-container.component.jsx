import React from 'react';

import './menu-container.styles.css'

const MenuContainer = ({ title, imageUrl, size }) => (
    <div 
    className= {`${size} menu-container`}> 
        <div 
            className="background-image"
            style= {{ 
            backgroundImage: `url(${imageUrl})` 
            }}
        />
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle"> SHOP NOW!</span>
        </div>
    </div>
); 

export default MenuContainer;