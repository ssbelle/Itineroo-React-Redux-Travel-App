import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';
import flashMessages from './flashMessages';
import auth from './auth';
import storeDatesReducer from './reducer_storeDates';
import tripReducer from './reducer_selectedTrips';

export default combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  storeDates: storeDatesReducer,
  flashMessages,
  auth,
  trips: tripReducer
})
