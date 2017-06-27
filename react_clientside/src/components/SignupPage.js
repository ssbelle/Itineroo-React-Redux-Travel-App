import React from 'react';
import {Link} from 'react-router-dom';
import SignupForm from './SignupForm'
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from './../actions/signupActions';
import { addFlashMessage } from './../actions/flashMessages';

class SignupPage extends React.Component {

  componentDidMount() {
    document.getElementById("signuppage").scrollIntoView();
      }

  render() {
    const {userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div id="signuppage">
        <SignupForm isUserExists={isUserExists} userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
    </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null , { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
