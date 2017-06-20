import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/login.js';
import TextFieldGroup from './common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from './../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
      console.log('User data', this.state);
      this.setState({errors: {}, isLoading: true});
      this.props.login(this.state).then(
        (res) => this.context.router.history.push('/create-trip'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {errors, identifier, password, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login!</h1>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <TextFieldGroup field="identifier" label="Username / Email" value={identifier} error={errors.identifier} onChange={this.onChange}/>

        <TextFieldGroup field="password" label="Password" value={password} error={errors.password} onChange={this.onChange} type="password"/>

        <div className="form-group">
          <button disabled={isLoading} className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">done</i>
          </button>
        </div>

      </form>

    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null , { login })(LoginForm);
