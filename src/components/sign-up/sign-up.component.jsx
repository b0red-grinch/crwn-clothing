import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
        }
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
           
            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
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
            <div className='sign-up'>
                <h2 className='title'> I don't have an account </h2>
                <span> signup with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput type='text' name='displayName' 
                    value={displayName} onChange={this.onChange} 
                    label='display name' required />

                    <FormInput type='text' name='email' 
                    value={email} onChange={this.onChange} 
                    label='email' required />

                    <FormInput type='password' name='password' 
                    value={password} onChange={this.onChange} 
                    label='password' required />

                    <FormInput type='password' name='confirmPassword' 
                    value={confirmPassword} onChange={this.onChange} 
                    label='confirm password' required />

                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;