import React from 'react';
import {Link} from 'react-router-dom';



const Signup = () => {
  return (
    <section>

      <nav id='navbar' className='nav-bar teal'>
        <span><Link to='/signup'>SIGNUP</Link></span>
        <span><Link to='/login'>LOGIN</Link></span>
      </nav>

      <section className='info-bar'>
        <div className='direction-bar'></div>
      </section>

      <section className='reg-login-popup-section'>
        <img className='home-img' src='images/travel-planning.jpg' mode='fit' />
        <section className='reg-log-popup-form'>
          <div className='input-field'>
            <input id="destination_input" type="text" className="validate" />
            <label>Name</label>
          </div>
          <div className='input-field'>
            <input id="destination_input" type="text" className="validate" />
            <label>Email</label>
          </div>
          <div className='input-field'>
            <input id="destination_input" type="text" className="validate" />
            <label>Password</label>
          </div>
          <button className="btn-floating btn-large waves-effect waves-light red"><Link to='/create-trip'><i className="material-icons">done</i></Link></button>

        </section>
      </section>



    </section>
  );
};

export default Signup;
