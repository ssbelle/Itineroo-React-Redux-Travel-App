import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';
import flashMessages from './flashMessages';
import auth from './auth';
import storeDatesReducer from './reducer_storeDates';
// import selectedPlacesReducerCartDash from './reducer_selectedPlacesCartDash'

export default combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  // selectedPlacesCartDash: selectedPlacesReducerCartDash,
  storeDates: storeDatesReducer,
  flashMessages,
  auth
})
