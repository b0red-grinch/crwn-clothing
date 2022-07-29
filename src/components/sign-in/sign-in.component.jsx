import React from 'react';


import {signInPopUp, auth} from '../../firebase/firebase.utils.js';
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';



import './sign-in.styles.scss';
import { SignInContainer,
    Heading,
    TextContainer,
    FormContainer,
    FormInputStyled, 
    ButtonContainer,
    CustomButtonStyled} from './sign-in.styles.js';



class SignIn extends React.Component {
    constructor() {
        super()
        
        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email:'', password:''})
        } catch(error){
            console.log(error);
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState({[name]: value});
    };

    render() {
        return (
            <SignInContainer>
                <Heading> I already have an account </Heading>
                <TextContainer> Sign in with your email or password </TextContainer>
                
                <FormContainer onSubmit={this.handleSubmit} > 
                    <FormInputStyled 
                    name="email" 
                    type="email" 
                    value= {this.state.email} 
                    label="email" 
                    handleChange={this.handleChange} 
                    required 
                    />
                    <FormInputStyled 
                    name="password" 
                    type="password" 
                    value= {this.state.password} 
                    label="password" 
                    handleChange={this.handleChange} 
                    required 
                    />
                    <ButtonContainer>
                        <CustomButtonStyled type="submit"> Sign In </CustomButtonStyled>
                        <CustomButtonStyled onClick={signInPopUp} isGoogleSignIn> 
                            Sign In With Google 
                        </CustomButtonStyled>
                    </ButtonContainer>
                </FormContainer>
            </SignInContainer>
        );
    }
}

export default SignIn;
