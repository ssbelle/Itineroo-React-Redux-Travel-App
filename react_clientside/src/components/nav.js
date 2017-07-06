import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';

class Nav extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth

    const userLinks = (
      <div>
      <ul className="nav">
        <li>
          <Link to="/create-trip">Create Trip</Link>
        </li>
        <li>
          <Link to="/edit-trip">Edit Trip</Link>
        </li>
        <li>
          <a id='logout-btn' href="#" onClick={this.logout.bind(this)}>Logout</a>
        </li>
      </ul>

      <ul className='footer'>

      </ul>
      </div>

    );

    const guestLinks = (
      <ul className="nav">
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    );

    return (
      <nav id="siteNav" className="navbar navbar-default navbar-fixed-top" role="navigation">

          {/* <!-- Logo and responsive toggle --> */}

              <Link to="/" className="navbar-brand">
                <h1>Itineroo</h1>
              </Link>
              {/* <img src='/static/images/travelroo-logo.jpg' /> */}

          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/"></Link>
              </li>
              { isAuthenticated ? userLinks : guestLinks }
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}

        {/* <!-- /.container --> */}
      </nav>
    );
  }
}

Nav.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, {logout})(Nav);
