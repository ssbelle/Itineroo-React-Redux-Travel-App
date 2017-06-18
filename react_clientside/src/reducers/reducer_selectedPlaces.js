export default function(state = {}, action) {
  switch(action.type){
  case 'PLACE_SELECTED':

    return {
      ...state,
      [action.city]:{
        ...state[action.city],
        [action.payload.id] : action.payload
      }
    };
  case 'PLACE_DELETED':

  }

  return state;
}
