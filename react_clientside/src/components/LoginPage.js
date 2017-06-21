import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="">
        <div className="">
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
