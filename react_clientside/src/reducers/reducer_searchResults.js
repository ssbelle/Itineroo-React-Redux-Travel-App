const initialState = {
  showResults: false,
  locationsData: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'LOCATIONS_FETCHED':
    return action.payload;
  }
  return state;
}
