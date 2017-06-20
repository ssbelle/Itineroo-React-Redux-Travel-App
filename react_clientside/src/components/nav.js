import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';
import { connect } from 'react-redux';

class Nav extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>

    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    );

    return (
      <nav id='navbar' className='navbar teal'>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Something here!</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  auth: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Nav);
