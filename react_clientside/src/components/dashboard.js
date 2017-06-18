import React from 'react';
import PlacesList from './places_list';
// import Layout from './layout';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
  console.log('dashboard props', props);
  return (
    <section>
      <nav id='navbar' className='nav-bar teal'>
        <span><Link to='/'>HOME</Link></span>
        <span><Link to='/dashboard'></Link></span>
        <button><Link to='/real-dashboard'>dash </Link></button>
      </nav>
      <section className='info-bar'>
        <div className='direction-bar'>
          <span>You are going to love {props.searchTerm}!</span>
          <span className='direction-additional-info'>Add & Remove & Drag & Drop to perfect your trip!</span>
        </div>
      </section>

      <PlacesList
        results={props.results}
        selectPlace={props.selectPlace}
        city={props.searchTerm}
      />

    </section>


  );
};

export default Dashboard;
