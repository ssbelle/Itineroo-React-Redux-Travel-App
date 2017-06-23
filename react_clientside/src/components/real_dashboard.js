import React from 'react';
import {connect} from 'react-redux';
import GoogleMap from './google_map';
import SelectedPlacesList from './selected_places_list';
import { getPlacesSelection} from '../actions/databasePlacesActions';

class RealDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      identifier: ''
    }
  }

  componentDidMount() {
    this.props.getPlacesSelection(this.props.user_id);
    console.log('component did mount', this.props);
  }

  render() {
    debugger;
    console.log('RealDashboard', this.state);
    return (
      <div>
        <section className='info-bar'>
          <div className='direction-bar'>

            <span>You are going to love {this.props.cities.join('')}!</span>
            <span className='direction-additional-info'>Drag & Drop to perfect your trip!</span>
            <span className='direction-additional-info'>View your plans per day!
            </span>
          </div>
        </section>

        <section className='dash-section'>
          <ul className=''>
            {this.props.cities.map(city => <li key={city}>
              <GoogleMap places={this.props.places[city]}/>
              <div className='city-wrapper'>
                <h2 className='dash-city-name'>{city}</h2>
                <SelectedPlacesList places={this.props.places[city]}/>
              </div>
            </li>)}
          </ul>
        </section>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("real", state);
  return {
    cities: Object.keys(state.selectedPlaces),
    places: state.selectedPlaces,
    storeDates: state.storeDates,
    user_id: state.auth.user.id
  };
};


export default connect(mapStateToProps, { getPlacesSelection } //grabbing pieces of information from global state
//  mapDispatchToProps
)(RealDashboard);
