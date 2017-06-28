import React from 'react';
import {Link} from 'react-router-dom';
import SignupForm from './SignupForm'
import {connect} from 'react-redux';
import {userSignupRequest, isUserExists} from './../actions/signupActions';
import {addFlashMessage} from './../actions/flashMessages';

class SignupPage extends React.Component {

  render() {
    const {userSignupRequest, addFlashMessage, isUserExists} = this.props;
    return (
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
      						<div className="row">
      							<div className="col-xs-6">
      								<Link to="/login" id="login-form-link">Login</Link>
      							</div>
      							<div className="col-xs-6">
      								<Link to="/signup" className="active" id="register-form-link">Register</Link>
      							</div>
      						</div>
      					</div>
              <SignupForm isUserExists={isUserExists} userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage);
