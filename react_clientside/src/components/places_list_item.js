import React from 'react';
import {Link} from 'react-router-dom';
// import PlacesList from './places_list';

export default class PlacesListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseSelected : ''
    };
  }
  render() {
    return (
      <div className={`list-item-container ${this.state.collapseSelected}`} id='list-item-container'>
          {//console.log('placesListItem props', props)
          this.props.data.photos && <div className='place-img-div' style={{backgroundImage:`url(https://maps.googleapis.com/maps/api/place/photo?maxheight=300&maxwidth=300&photoreference=${this.props.data.photos[0].photo_reference}&key=AIzaSyANfEEYlXnOIAq0qn3l48YABVrxQL6DXj0)`}}/>
        }
        <div className='list-item-info-section'>
          <span>{JSON.stringify(this.props.data.name)}</span>
          <span>Type of Attraction: {JSON.stringify(this.props.data.types[0])}</span>
          <span>Rating: {JSON.stringify(this.props.data.rating)}</span>
            <button
              onClick={()=>{
                this.props.selectPlace(this.props.data, this.props.city);
                this.setState({collapseSelected: 'hide'});
              }}
              className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></button>
        </div>
      </div>
    );
  }
}
