import styled, {css} from 'styled-components';

export const MenuContainerDiv = styled.div`
    min-width: 30%;
    height: ${({size}) =>(size ? '350px':'240px')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &.large {
        height: 380px;
    }
  
      &:first-child {
        margin-right: 7.5px;
    }
    
      &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;
        
        & img {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        }
  
        & .content {
          opacity: 0.9;
        }
    }

    

`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute; 
`
export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;

`

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`

