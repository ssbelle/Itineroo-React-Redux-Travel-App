import React, { Component } from 'react';
import {AppContainer} from 'react-hot-loader';
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import Home from './components/home';
import Layout from './components/layout';
import Signup from './components/signup';
import Login from './components/login';
// import Customize from './components/customize';

const store = createStore(
                rootReducer,
                composeWithDevTools(
                  applyMiddleware(thunk)
                )
              );

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} >
          <Router>
            <div>
              <Route exact path='/' component={Home}>
              </Route>
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/create-trip' component={Layout}>
              </Route>
            </div>
          </Router>
        </Provider>
      </AppContainer>

    );
  }
}

export default App;
