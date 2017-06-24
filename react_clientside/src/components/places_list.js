import React from 'react';
import PlacesListItem from './places_list_item';

export const PlacesList = (props) => {
  console.log('PlacesList props', props);
  // console.log('test2', props.results.results)
  return (
    <ul>
    {props.results.map((place) =>
      <PlacesListItem
        data={place}
        key={place.id}
        selectPlace={props.selectPlace}
        city={props.city}
        dates={props.storeDates}
      />
    )}
    </ul>
  );
};

export default PlacesList;


// add an extra .results on line 9 when calling api
