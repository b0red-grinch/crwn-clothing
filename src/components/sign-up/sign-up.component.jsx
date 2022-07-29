import React from 'react';

import { SingUpContainer, Heading, TextContainer, FormContainer, FormInputStyled, CustomButtonStyled, SignUpContainer } from './sign-up.styles';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
    
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user, { displayName });
           
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }   
    }

    onChange =  (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <Heading className='title'> I don't have an account </Heading>
                <TextContainer> signup with your email and password</TextContainer>
                <FormContainer onSubmit={this.handleSubmit}>

                    <FormInputStyled type='text' name='displayName' 
                    value={displayName} onChange={this.onChange} 
                    label='display name' required />

                    <FormInputStyled type='text' name='email' 
                    value={email} onChange={this.onChange} 
                    label='email' required />

                    <FormInputStyled type='password' name='password' 
                    value={password} onChange={this.onChange} 
                    label='password' required />

                    <FormInputStyled type='password' name='confirmPassword' 
                    value={confirmPassword} onChange={this.onChange} 
                    label='confirm password' required />

                    <CustomButtonStyled type="submit"> Sign Up </CustomButtonStyled>
                </FormContainer>

            </SignUpContainer>
        )
    }
}

export default SignUp;