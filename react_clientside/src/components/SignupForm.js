import React from 'react';
import {Link} from 'react-router-dom';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.userSignupRequest(this.state);
  }

  render() {
    const { userSignupRequest } = this.props;
    return (
        <section className='reg-login-popup-section'>
          <img className='home-img' src='images/travel-planning.jpg' mode='fit'/>

          <form onSubmit={this.onSubmit}>
          <section className='reg-log-popup-form'>
            <div className='input-field'>
              <label className="control-label">Username</label>
              <input id="destination_input" type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange}/>
            </div>
            <div className='input-field'>
              <label className="control-label">Email</label>
              <input id="destination_input" type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
            </div>
            <div className='input-field'>
              <label className="control-label">Password</label>
              <input id="destination_input" type="text" className="form-control" name="password" value={this.state.password} onChange={this.onChange}/>
            </div>
            <div className='input-field'>
              <label className="control-label">Password Confirmation</label>
              <input id="destination_input" type="text" className="form-control" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange}/>
            </div>
            <button className="btn-floating btn-large waves-effect waves-light red">
              {/* <Link to='/create-trip'> */}
                <i className="material-icons">done</i>
              {/* </Link> */}
            </button>
          </section>
        </form>
        </section>
    );
  }
}
