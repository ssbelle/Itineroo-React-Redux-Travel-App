import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
