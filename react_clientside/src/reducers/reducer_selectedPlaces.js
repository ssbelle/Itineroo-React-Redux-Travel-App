import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

const initialState = {
  places: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'PLACE_SELECTED':
      return {...state, places: [...state.places, action.payload]}
    case 'PLACE_DELETED':
        let places = [...state.places.slice(0, action.index), ...state.places.slice(action.index + 1)]
        return {...state, places: places}
    default:
      return state;
  }
}

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
