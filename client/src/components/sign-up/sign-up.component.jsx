import React from 'react';

import { Heading, TextContainer, FormContainer, FormInputStyled, CustomButtonStyled, SignUpContainer } from './sign-up.styles';

import { connect } from 'react-redux';

import './sign-up.styles.scss';

import { signUpStart} from "../../redux/user/user.actions.js"

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
        const { signUpStart } = this.props;
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName, email, password});
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

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);

