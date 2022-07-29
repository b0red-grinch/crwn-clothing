import styled, {css} from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        button {
          visibility: visible;
          opacity: 0.85;
        }
        image {
          opacity: 0.8;
        }
      }
`

export const CustomButtonStyled = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    visibility: hidden;
`

export const CollectionImage = styled.image`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;            
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const CollectionPrice = styled.span`
    width: 10%;
`
