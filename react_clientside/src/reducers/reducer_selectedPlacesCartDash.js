const initialState = {
  places: []
}
export default function(state = initialState, action) {
  switch (action.type) {
    case 'PLACE_SELECTED':
      return {
        ...state,
        places: [
          ...state.places,
          action.payload
        ]
      };

    default:
      return state;
  }
}
