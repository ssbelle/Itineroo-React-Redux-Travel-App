import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Nav extends React.Component {
  logout (e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/create-trip">My Trip</Link>
        </li>
        <li>
          <a id='logout-btn' href="#" onClick={this.logout.bind(this)}>Logout</a>
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
      <div>
      <nav id='navbar' className='navbar teal'>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"><img src='/static/images/travelroo-logo.jpg' /></Link>
          </div>

          <div className="">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>

      </div>
    );
  }
}

Nav.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {logout})(Nav);
