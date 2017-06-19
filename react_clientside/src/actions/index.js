export function selectPlace(place, city) {
  //needs to return an action an object with type props
  return {
    type: 'PLACE_SELECTED',
    payload: place,
    city: city
  };
}

export function goFetchLocations(query, dispatch) {
    //AIzaSyDTPU6hai6_STJicsn_FPXGfnCb71kPdYgw
  fetch('./fakeState.json')
  // fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+ ' top places to see'+'&radius=5000&sensor=false&key=AIzaSyANfEEYlXnOIAq0qn3l48YABVrxQL6DXj0&libraries=places', {headers:{'Access-Control-Allow-Origin': '*'}})
  // .then(response => {
    return response.json();
  }).then(locationsData => {
    dispatch({
      type: 'LOCATIONS_FETCHED',
      payload: {
        showResults: true,
        locationsData: locationsData//.results
      }
    });
  });
}
