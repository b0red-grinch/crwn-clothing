import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInPopUp} from '../../firebase/firebase.utils.js';
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';



import './sign-in.styles.scss';


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
        const auth = getAuth();
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
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> Sign in with your email or password </span>
                
                <form onSubmit={this.handleSubmit} > 
                    <FormInput name="email" type="email" value= {this.state.email} label="email" handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" value= {this.state.password} label="password" handleChange={this.handleChange} required />
                    <div className="btn">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInPopUp} isGoogleSignIn> 
                            Sign In With Google 
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
