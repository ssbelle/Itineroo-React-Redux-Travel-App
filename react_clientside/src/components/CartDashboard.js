import React from 'react';
import PlacesList from './places_list';
// import Layout from './layout';
import {Link} from 'react-router-dom';
import SelectedPlacesList from './selected_places_list';
import MiniCartDashboard from './cartdashboard/MiniCartDashboard'

const CartDashboard = (props) => {
  console.log('dashboard props', props);
  return (
    <section>
      <section className='info-bar'>
        <div className='direction-bar'>
          <span>You are going to love {props.searchTerm}!</span>

        </div>
      </section>
    <section className='combine-customize-sections'>
      <section>
       <h3>Select your Places of Interest</h3>
      <PlacesList
        results={props.results}
        selectPlace={props.selectPlace}
        city={props.searchTerm}
        dates={props.storeDates}
      />
      </section>
      <section>

      <MiniCartDashboard />
      </section>
      </section>
    </section>


  );
};

export default CartDashboard;
