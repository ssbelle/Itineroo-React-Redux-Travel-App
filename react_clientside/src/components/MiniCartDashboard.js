import React from 'react';
import { connect } from 'react-redux';
import SelectedPlacesList from './selected_places_list';

const MiniCartDashboard = (props) => {
  return (
    <div>
    <section className='dash-section'>
      <ul className=''>
        {props.cities.map(city =>
          <li key={city}>
            <div className='city-wrapper'>
              <SelectedPlacesList places={props.places[city]}/>
            </div>
          </li>)}
      </ul>
    </section>
    </div>

  );
};

const mapStateToProps = state => {
  console.log("real", state);
  return {
    cities: Object.keys(state.selectedPlaces),
    places: state.selectedPlaces,
    storeDates: state.storeDates
  };
};

export default connect(
  mapStateToProps //grabbing pieces of information from global state
//  mapDispatchToProps
)(MiniCartDashboard);
