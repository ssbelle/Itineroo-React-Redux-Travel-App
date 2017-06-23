export function selectPlace(place, city, currentUser, tripID) {
  //needs to return an action an object with type props
  {console.log('tripppppppppppppppp', tripID);}
  return {
    type: 'PLACE_SELECTED',
    payload: place,
    city: city,
    currentUser: currentUser,
    tripID:tripID
  };
}

//  Delete functions
export function deletePlace(index) {
  return {
    type: 'PLACE_DELETED',
    index
  };
}

export function storeDates(datesLength){
  return {
    type: 'DATES_SELECTED',
    payload: datesLength
  };
}

export function goFetchLocations(query, dispatch) {
  let url = '/api/data?query=' + query;
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(locationsData => {
    dispatch({
      type: 'LOCATIONS_FETCHED',
      payload: {
        showResults: true,
        locationsData: locationsData.results,
        searchTerm: query
      }
    });
  });
}
