import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-container.styles.css'

import { MenuContainerDiv, BackgroundImage, ContentContainer, Title, Subtitle } from './menu-container.styles';

const MenuContainer = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();
    return (
        <MenuContainerDiv size={size} onClick={()=> navigate( `${linkUrl}`)}> 
        <BackgroundImage
            style= {{ 
            backgroundImage: `url(${imageUrl})` 
            }}
        />
        <ContentContainer className="content">
            <Title className="title"> {title.toUpperCase()} </Title>
            <Subtitle> SHOP NOW! </Subtitle>
        </ContentContainer>
    </MenuContainerDiv>
    );
    
}; 

export default MenuContainer;