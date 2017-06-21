import React, { Component } from 'react';
import {AppContainer} from 'react-hot-loader';
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { IndexRoute} from 'react-router';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import requireAuth from '../utils/requireAuth';

import Home from './components/Home';
import Nav from './components/Nav';
import Layout from './components/Layout';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import RealDashboard from './components/real_dashboard';
import FluxCartApp from './components/FluxCartApp.react.js';
import FlashMessagesList from './components/flash/FlashMessagesList';
import ShoppingCart from './components/ShoppingCart';
import GooglePlacesSuggest from './components/GooglePlacesSuggest';

// import Customize from './components/customize';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
   setAuthorizationToken(localStorage.jwtToken);
   store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} >
          <Router>
            <div>
            <FlashMessagesList />
            <Nav />
              <Route exact path='/' component={Home}>
                {/* <IndexRoute component={Home} /> */}
              </Route>
              <Route path='/signup' component={SignupPage} />
              <Route path='/login' component={LoginPage} />
              {/* Need to change layout */}
              <Route path='/create-trip' component={requireAuth(Layout)}/>
              <Route path='/real-dashboard' component={requireAuth(RealDashboard)} />
              <Route path='/cart' component={FluxCartApp} />
              {/* <Route path='/placessuggest' component={GooglePlacesSuggest} /> */}
              <Route path='/shoppingcart' component={ShoppingCart} />
            </div>
          </Router>
        </Provider>
      </AppContainer>

    );
  }
}
