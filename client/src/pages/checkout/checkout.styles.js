import styled from 'styled-components';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
      }
`

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`
export const TestWarningBlock = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`

export const StripeButtonStyled = styled(StripeCheckoutButton)`
  display: flex;
  align-items: center;
`
