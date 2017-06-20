import { combineReducers } from 'redux';
import searchResultsReducer from './reducer_searchResults';
import selectedPlacesReducer from './reducer_selectedPlaces';
import storeDatesReducer from
'./reducer_storeDates';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  selectedPlaces: selectedPlacesReducer,
  storeDates: storeDatesReducer

});

export default rootReducer;
