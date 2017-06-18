import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  
});

export default rootReducer;
