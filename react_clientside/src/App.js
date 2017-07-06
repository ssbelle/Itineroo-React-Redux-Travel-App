import React, { Component } from 'react';
import {AppContainer} from 'react-hot-loader';
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import { IndexRoute, browserhistory } from 'react-router';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import requireAuth from '../utils/requireAuth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Import Components
import HomePage from './components/home_page';
import Nav from './components/Nav';
import CreateTrip from './components/CreateTrip';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import CartDashboard from './components/CartDashboard';
import FlashMessagesList from './components/flash/FlashMessagesList';
import ItineraryView from './components/ItineraryView';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
    applyMiddleware(thunk)
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
          <Router history={history}>
            <MuiThemeProvider>
            <div>

            <FlashMessagesList />
            <Nav />
              <Route exact path='/' component={HomePage}/>
              <Route path='/signup' component={SignupPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/edit-trip' component={requireAuth(CartDashboard)}/>
              <Route path='/create-trip' component={requireAuth(CreateTrip)}/>
              {/* <Route path='/real-dashboard' component={requireAuth(RealDashboard)} /> */}
              <Route path='/itinerary/:trip_id' component={requireAuth(ItineraryView)} />
            </div>
            </MuiThemeProvider>
          </Router>
        </Provider>
      </AppContainer>

    );
  }
}
