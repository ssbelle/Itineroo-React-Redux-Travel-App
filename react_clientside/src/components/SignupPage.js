import React from 'react';
import SignupForm from './SignupForm'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignupRequest } from './../actions/signupActions';

class SignupPage extends React.Component {
  render() {
    const {userSignupReuqest} = this.props;
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
      <section className='info-bar'>
        <div className='direction-bar'></div>
      </section>
      {/* <div className = "col-md-4 col-md-offset-4" > */}
        <SignupForm userSignupRequest={userSignupRequest}/>
      {/* </div> */}
    </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null , { userSignupRequest })(SignupPage);
