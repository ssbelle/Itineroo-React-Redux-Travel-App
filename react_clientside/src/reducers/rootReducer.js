import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';
import flashMessages from './flashMessages'

export default combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  flashMessages
})
