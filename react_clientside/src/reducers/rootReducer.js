import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';
import flashMessages from './flashMessages';
import auth from './auth';
import storeDatesReducer from './reducer_storeDates';
import tripReducer from './reducer_selectedTrips';
import {findIndex} from 'lodash';

export default combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  storeDates: storeDatesReducer,
  flashMessages,
  auth,
  trips: tripReducer
});

export const selectedPlacesEnhancer = state =>
  state.selectedPlaces.places.map(selected =>
    ({
      ...selected,
      index: findIndex(state.searchResults.locationsData, result => result === selected )
    })
  );
