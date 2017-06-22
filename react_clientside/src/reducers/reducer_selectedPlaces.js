const initialState = {
  places: []
}
export default function(state = initialState, action) {
  switch(action.type){
  case 'PLACE_SELECTED':

    return {...state, places: [...state.places, action.payload]};
    //   ...state,
    //   [action.city]: {
    //     ...state[action.city],
    //     //city: action.city,
    //     [action.payload.id]: action.payload
    //   }
    // };
  //case 'PLACE_DELETED':
//
  //}
  default:
    return state;
}
}
