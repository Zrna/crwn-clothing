/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage';

import { selectCurrentUser } from './store/user/user.selectors';
import { checkuserSession } from './store/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { checkuserSession } = this.props;
    checkuserSession();
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkuserSession: () => dispatch(checkuserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
