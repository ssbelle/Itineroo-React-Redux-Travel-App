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
      <nav id="siteNav" className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          {/* <!-- Logo and responsive toggle --> */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <a className="navbar-brand" href="#">
                <span className="glyphicon glyphicon-plane"></span>
                <span className="glyphicon glyphicon-globe"></span>
                TravelRoo
              </a>
              {/* <img src='/static/images/travelroo-logo.jpg' /> */}
          </div>
          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              { isAuthenticated ? userLinks : guestLinks }
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
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
