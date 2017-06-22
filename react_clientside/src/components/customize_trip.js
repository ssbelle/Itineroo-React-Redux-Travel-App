import React from 'react';
import PlacesList from './places_list';
// import Layout from './layout';
import {Link} from 'react-router-dom';

const CustomizeTrip = (props) => {
  return (
    <section>
      <section className='info-bar'>
        <div className='direction-bar'>
          <span>You are going to love {props.searchTerm}!</span>
          <span className='direction-additional-info'>Add & Remove & Drag & Drop to perfect your trip!</span>
        </div>
      </section>
      <section className='dash-btn'>
        <button>
          <Link to='/dashboard'>done selections-take me to dashboard</Link>
        </button>
      </section>

      <PlacesList
        results={props.results}
        selectPlace={props.selectPlace}
        city={props.searchTerm}
        dates={props.storeDates}
        currentUser={props.currentUser}
      />
    </section>
  );
};

export default CustomizeTrip;
