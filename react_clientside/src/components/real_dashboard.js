import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

const RealDashboard = (props) => {
  console.log('RealDonaldTrump',props)
  return (
    <div>

    <section className='info-bar'>
      <div className='direction-bar'>

        <span>You are going to love {props.cities.join('')}!</span>
        <span className='direction-additional-info'>Drag & Drop to perfect your trip!</span>
        <span className='direction-additional-info'>View your plans per day!
        </span>
      </div>
    </section>

    <section className='dash-section'>
      <ul className=''>
        {props.cities.map(city =>
          <li key={city}>
            <GoogleMap places={props.places[city]} />
            <div className='city-wrapper'>
              <h2>{city}</h2>
              <ul className='selectedPlaces'>
              {Object.values(props.places[city])
                    .map(location =>
                      <li key={location.id}>
                        <div className='dash-item-img'></div>
                        <div className='dash-item-text'>
                          <span>
                            {location.name}
                          </span>
                          <span>who is going icons</span>
                          </div>
                        </li>
                      )}
              </ul>
            </div>
          </li>)}
      </ul>
    </section>
    </div>

  );
};

const mapStateToProps = state => {
  console.log("real",state);
  return {
    cities: Object.keys(state.selectedPlaces),
    places: state.selectedPlaces
  };
};

export default connect(
  mapStateToProps //grabbing pieces of information from global state
//  mapDispatchToProps
)(RealDashboard);