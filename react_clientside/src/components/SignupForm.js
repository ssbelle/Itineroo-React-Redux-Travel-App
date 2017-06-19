import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup.js'
import TextFieldGroup from './common/TextFieldGroup'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({errors: {}});
          console.log('User data', this.state);
          this.props.userSignupRequest(this.state).then(
            () => {
              this.props.addFlashMessage({
                type: 'success',
                text: 'Signup sucessful. Welcome!'
              });
            // Directs user to create-trip page upon signing up
            this.context.router.history.push('/create-trip');
          }, ({response}) => {
            this.setState({errors: response.data})
          });
        }
      }

  render() {
    const {errors} = this.state;
    const {userSignupRequest} = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Welcome!</h1>

        <TextFieldGroup error={errors.username} label="Username" onChange={this.onChange} value={this.state.username} field="username"/>

        <TextFieldGroup error={errors.email} label="Email" onChange={this.onChange} value={this.state.email} field="email"/>

        <TextFieldGroup error={errors.password} label="Password" onChange={this.onChange} value={this.state.password} field="password" type="password"/>

        <TextFieldGroup error={errors.passwordConfirmation} label="Password Confirmation" onChange={this.onChange} value={this.state.passwordConfirmation} field="passwordConfirmation" type="password"/>

        <div className="form-group">
          <button className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">done</i></button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
 }

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
