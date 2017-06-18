import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const RealDashboard = (props) => {
  return (
    <div>
    <nav id='navbar' className='nav-bar teal'>
      <span><Link to='/'>HOME</Link></span>
    </nav>
    <section className='info-bar'>
      <div className='direction-bar'>

        <span>You are going to love {props.searchTerm}!</span>
        <span className='direction-additional-info'>Drag & Drop to perfect your trip!</span>
        <span className='direction-additional-info'>View your plans per day!
        </span>
      </div>
    </section>

    <section className='map-section'>google map
    </section>
    <section>

    </section>
    </div>

  );
};

const mapStateToProps = state => {
  console.log("real",state);
  return state;
}

export default connect(
  mapStateToProps, //grabbing pieces of information from global state
//  mapDispatchToProps
)(RealDashboard);
