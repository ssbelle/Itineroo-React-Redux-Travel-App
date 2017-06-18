import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';

export default class Nav extends React.Component {
  render() {
    return (
          <nav id='navbar' className='nav-bar teal'>
            <span><Link to='/'>HOME</Link></span>
            <span><Link to='/signup'>SIGNUP</Link></span>
            <span><Link to='/login'>LOGIN</Link></span>
          </nav>
    );
  }
}
