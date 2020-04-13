import React, { Component } from 'react';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './styles';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      // this will clear the form
      this.setState({
        email: '',
        password: ''
      });
    } catch (e) {
      console.log('Something went wrong with sign in.', e);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
