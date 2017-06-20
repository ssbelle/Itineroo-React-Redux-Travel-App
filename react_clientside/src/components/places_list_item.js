import React from 'react';
// import PlacesList from './places_list';

export const PlacesListItem = (props) => {
  console.log('placesListItem', props)
  return (
  <div className='list-item-container' id='list-item-container'>
    <div className='place-img-div'>
      {//console.log('placesListItem props', props)
         //props.data.photos && <img src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=100&maxwidth=100&photoreference=${props.data.photos[0].photo_reference}&key=AIzaSyANfEEYlXnOIAq0qn3l48YABVrxQL6DXj0`} />
    }


    </div>
    <div className='list-item-info-section'>
      <span>{JSON.stringify(props.data.name)}</span>
      <span>Type of Attraction: {JSON.stringify(props.data.types[0])}</span>
      <span>Rating: {JSON.stringify(props.data.rating)}</span>

      <span>
      <a onClick={()=> props.selectPlace(props.data, props.city)}href='#'>Interested </a>
      <a href='#'>Discard</a>

      </span>

    </div>
  </div>
  );
};
