export default function(state = {}, action) {
  console.log('reducer state', state, 'reducer ac',action)
  switch(action.type){
  case 'PLACE_SELECTED': {
    const users = state[action.payload.id] ?
      state[action.payload.id].users : {};
    return {
      ...state,
      [action.city]: {
        ...state[action.city],
        //city: action.city,
        [action.payload.id]: {
          ...action.payload,
          users: {
            ...users,
            [action.currentUser.id]: action.currentUser.username
          }
        }
      }
    };
  }
  case 'PLACE_DELETED':

  }

  return state;
}

//line 12 breaks everything
//sekected places should be
// tripID : [
//   city: {
//     placeID : {
//        object
//     }
//   }
// ]
