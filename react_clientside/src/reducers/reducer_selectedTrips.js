const initialState = {
  places: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TRIP_LOADED':
      return {
        ...state,
        places: [
          ...action.data
        ]
      }
    default:
      return state;
  }
}
