import React from 'react';
import {connect} from 'react-redux';
import GoogleMap from './google_map';
import SelectedPlacesList from './selected_places_list';
// import GridListExampleSimple from './GridDashboard';
import PhotoGrid from './PhotoGrid';
import {getPlacesSelection} from '../actions/databasePlacesActions';
import Photo from './Photo';
// import { Link } from 'react-router-dom';
import Comments from './trip_comments';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}

  componentWillMount() {
    this.props.getPlacesSelection(this.props.user_id);
  }

  render() {
    console.log('Single Page Params', this.props);
    let tripId = this.props.match.params.postId;
    // console.log('POSTID', postId);

    let place = this.props.places.filter(function(x) { return x.id == tripId})[0]
    let placesData = [];
    let placeId, placeCity = '';

    // const id = this.props.places.findIndex((post) => post.id === postId);
    // console.log('THE ID', id);

    // let place = this.props.places[postId - 1];
    console.log('PLACE', place);
    if (place && place.places_data) {
      console.log('PLACE DATA', place.places_data);
      console.log(typeof place.places_data);
      placesData = place.places_data;
      placeId = place.id;
      placeCity = place.city;
    }

    return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="trip-sidebar">
        <div className='heading'>
          <h1>Trip #{placeId} to {placeCity}</h1>
        </div>
        <SelectedPlacesList places={placesData}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '2', order: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GoogleMap places={placesData}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '100%', height: '200px' }}>
            <Comments postComments={this.props.comments} tripId={tripId}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let comments = state.comments[props.match.params.postId] || [];
  return {
    user_id: state.auth.user.id,
    places: state.trips.places,
    comments: comments

  };
};

export default connect(mapStateToProps, {getPlacesSelection}
)(Single);

{/* <div>
<section className='info-bar'>
  <div className='direction-bar'>
    <span>You are going to love {this.props.cities.join('')}!</span>
    <span className='direction-additional-info'>Drag & Drop to perfect your trip!</span>
    <span className='direction-additional-info'>View your plans per day!
    </span>
  </div>
</section>
<section className=''>


</section>
</div> */}
