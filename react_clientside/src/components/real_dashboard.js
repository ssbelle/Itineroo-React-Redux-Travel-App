import React from 'react';
import {connect} from 'react-redux';
import GoogleMap from './google_map';
import SelectedPlacesList from './selected_places_list';
import { getPlacesSelection} from '../actions/databasePlacesActions';

class RealDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.getPlacesSelection(this.props.user_id);
    console.log('component did mount', this.props);
  }

  render() {
    debugger;
    console.log('RealDashboard', this.state);
    console.log('COMPONENT MOUNTED', this.props)
    return (
      <div>
        <section className='info-bar'>
          <div className='direction-bar'>

            {/* <span>You are going to love {this.props.cities.join('')}!</span> */}
            <span className='direction-additional-info'>Drag & Drop to perfect your trip!</span>
            <span className='direction-additional-info'>View your plans per day!
            </span>
          </div>
        </section>

        <section className='dash-section'>
          <ul className=''>
            {this.props.places.map(i => <li key={`trip-${i.id}`}>
              {/* <GoogleMap places={this.props.places[i]}/> */}
              {/* <div className='city-wrapper'> */}
                {/* <h2 className='dash-city-name'>{city}</h2> */}
                {/* <SelectedPlacesList places={this.props.places[city]}/> */}
                <SelectedPlacesList places={i.places_data}/>
              {/* </div> */}
            </li>)}
          </ul>
        </section>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('real_dashboard state', state)
  return {
    // cities: Object.keys(state.selectedPlaces),
    // storeDates: state.storeDates,
    user_id: state.auth.user.id,
    places: state.trips.places
  };
};


export default connect(mapStateToProps, { getPlacesSelection } //grabbing pieces of information from global state
//  mapDispatchToProps
)(RealDashboard);
