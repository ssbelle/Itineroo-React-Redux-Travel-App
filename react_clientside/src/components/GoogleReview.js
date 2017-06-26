import React from 'react';
import ReactDOM from 'react-dom';

class GoogleReview extends React.Component {
  componentDidMount() {
    // debugger;
    // console.log('GOOGLE MAPS', this.props)
    const request = {
      placeId: props.place_id // example: ChIJN1t_tDeuEmsRUsoyG83frY4
    },

    const service = new google.maps.places.PlacesService(map); // map is your map object

    service.getDetails(request, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place.reviews);
      }
    });
  }



  render() {
    return (
      <div className=''>
        <span>{place.reviews}</span>
      </div>
    );
  }
}

export default GoogleReview;
