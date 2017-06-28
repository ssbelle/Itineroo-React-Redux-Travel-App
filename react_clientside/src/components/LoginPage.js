import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6">
                      <Link to="/login" className="active" id="login-form-link">Login</Link>
                    </div>
                    <div className="col-xs-6">
                      <Link to="/signup" id="register-form-link">Register</Link>
                    </div>
                  </div>
                </div>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default LoginPage;
