import React from 'react';

export const PlacesListItem = props =>
  <div className={`list-item-container ${props.collapseSelected}`} id='list-item-container'>
      {//console.log('placesListItem props', props)
      props.data.photos && <div className='place-img-div' style={{backgroundImage:`url(https://maps.googleapis.com/maps/api/place/photo?maxheight=300&maxwidth=300&photoreference=${props.data.photos[0].photo_reference}&key=AIzaSyANfEEYlXnOIAq0qn3l48YABVrxQL6DXj0)`}}/>
    }
    <div className='list-item-info-section'>
      <span>{JSON.stringify(props.data.name)}</span>
      <span>Type of Attraction: {JSON.stringify(props.data.types[0])}</span>
      <span>Rating: {JSON.stringify(props.data.rating)}</span>
        <button
          onClick={()=>{
            props.selectPlace(props.data, props.city);
            props.handleCollapseSelected(props.index, true);
            // TODOthis.setState({collapseSelected: 'hide'});
          }}
          className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></button>
    </div>
  </div>;
