import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';

export default class Nav extends React.Component {
  render() {
    return (
      <nav id='navbar' className='navbar teal'>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Something here!</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/signup'>SIGNUP</Link>
              </li>
              <li>
                <Link to='/login'>LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
