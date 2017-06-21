import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import GoogleMap from './google_map';
import SelectedPlacesList from './selected_places_list';

const Dashboard = (props) => {
  console.log('RealDonaldTrump',props)
  return (
    <div>

    <section className='info-bar'>
      <div className='direction-bar'>

        <span>You are going to love {props.cities.join('')}!</span>
        <span className='direction-additional-info'>Reorganise the places of interest to perfect your trip!</span>
        <span className='direction-additional-info'>View your plans per day!
        </span>
      </div>
    </section>

    <section className='dash-section'>
      <ul className=''>
        {props.cities.map(city =>
          <li key={city}>
            <GoogleMap places={props.selectedPlaces[city]} />
            <div className='city-wrapper'>
              <h2 className='dash-city-name'>{city}</h2>
              <Link to={{
                pathname: '/create-trip',
                state: {
                  randomStateElement: true,
                  searchTerm: {city}
                }
              }}
            >Change my selections</Link>
              <SelectedPlacesList places={props.selectedPlaces[city]}/>
            </div>
          </li>)}
      </ul>
    </section>
    </div>
  );
};

// selectPlace={this.props.selectPlace}
// searchTerm={this.state.searchTerm}
// storeDates={this.state.datesTerm}
// results={this.props.locationsData}

const mapStateToProps = state => {
  return {
    cities: Object.keys(state.selectedPlaces),
    selectedPlaces: state.selectedPlaces,
    storeDates: state.storeDates
  };
};

export default connect(
  mapStateToProps //grabbing pieces of information from global state
//  mapDispatchToProps
)(Dashboard);
