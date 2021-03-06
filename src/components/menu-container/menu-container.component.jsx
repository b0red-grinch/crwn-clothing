import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-container.styles.css'

const MenuContainer = ({ title, imageUrl, size, linkUrl, match }) => {
    let navigate = useNavigate();
    return (
        <div className= {`${size} menu-container`} onClick={()=> navigate( `${linkUrl}`)}> 
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
    
}; 

export default MenuContainer;