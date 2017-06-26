import React from 'react';
import {PlacesListItem} from './places_list_item';

export const PlacesList = (props) => {
  console.log('PlacesList props', props);
  // console.log('test2', props.results.results)
  return (
    <ul>
    {props.results.map((place, index) => {
      const isCollapsed =
        props.collapseSelected.hasOwnProperty(index) &&
        props.collapseSelected[index]? 'hide' : '';
      return (
        <PlacesListItem
          data={place}
          index={index}
          key={place.id}
          selectPlace={props.selectPlace}
          city={props.city}
          dates={props.storeDates}
          collapseSelected={isCollapsed}
          handleCollapseSelected={props.handleCollapseSelected}
        />
      );
    }
    )}
    </ul>
  );
};

export default PlacesList;


// add an extra .results on line 9 when calling api
