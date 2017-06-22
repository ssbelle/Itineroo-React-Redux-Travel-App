import React from 'react';
import PlacesList from './places_list';
// import Layout from './layout';
import {Link} from 'react-router-dom';
import SelectedPlacesList from './selected_places_list';
import MiniCartDashboard from './createTripDash/MiniCartDashboard'

const CartDashboard = (props) => {
  console.log('dashboard props', props);
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
          <Link to='/real-dashboard'>Done selections take me to the dashboard</Link>
        </button>
      </section>

      <PlacesList
        results={props.results}
        selectPlace={props.selectPlace}
        city={props.searchTerm}
        dates={props.storeDates}
      />

      <MiniCartDashboard />

    </section>


  );
};

export default CartDashboard;
