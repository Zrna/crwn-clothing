import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import Header from './components/Header';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

import { selectCurrentUser } from './store/user/user.selectors';
import { checkuserSession } from './store/user/user.actions';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/SignInAndSignUpPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

const App = ({ checkuserSession, currentUser }) => {
  useEffect(() => {
    checkuserSession();
  }, [checkuserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkuserSession: () => dispatch(checkuserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
