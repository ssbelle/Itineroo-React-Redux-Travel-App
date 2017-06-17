export default function(state = {}, action) {
  console.log('selectedPlace reducer', action);
  switch(action.type){
  case 'PLACE_SELECTED':
    console.log('clicked interested', action.payload);

    return {
      ...state,
      [action.payload.id] : action.payload
    };
  case 'PLACE_DELETED':
    console.log('deleted item hook this up');
  }
  console.log(state);
  return state;
}
