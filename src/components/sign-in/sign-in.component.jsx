import React, { useState } from 'react';
import { connect } from 'react-redux'; 

import { googleSignInStart } from '../../redux/user/user.actions.js';
import { emailSignInStart } from '../../redux/user/user.actions.js';

import './sign-in.styles.scss';
import { SignInContainer,
    Heading,
    TextContainer,
    FormContainer,
    FormInputStyled, 
    ButtonContainer,
    CustomButtonStyled} from './sign-in.styles.js';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials]= useState({
            email: '',
            password: ''
        });

    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart({email, password});
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        
        setCredentials({...userCredentials, [name]: value});
    };
        return (
            <SignInContainer>
                <Heading> I already have an account </Heading>
                <TextContainer> Sign in with your email or password </TextContainer>
                
                <FormContainer onSubmit={handleSubmit} > 
                    <FormInputStyled 
                    name="email" 
                    type="email" 
                    value= {email} 
                    label="email" 
                    handleChange={handleChange} 
                    required 
                    />
                    <FormInputStyled 
                    name="password" 
                    type="password" 
                    value= {password} 
                    label="password" 
                    handleChange={handleChange} 
                    required 
                    />
                    <ButtonContainer>
                        <CustomButtonStyled type= "submit" > Sign In </CustomButtonStyled>
                        <CustomButtonStyled type= "button" onClick={ googleSignInStart } isGoogleSignIn> 
                            Sign In With Google 
                        </CustomButtonStyled>
                    </ButtonContainer>
                </FormContainer>
            </SignInContainer>
        );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
