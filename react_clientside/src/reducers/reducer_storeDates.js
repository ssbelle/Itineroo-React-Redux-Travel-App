const initialState = {
  dates: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
  case 'DATES_SELECTED':
    return {
      ...state,
      datesLength: action.payload.dates
    };
  }
  return state;
}
