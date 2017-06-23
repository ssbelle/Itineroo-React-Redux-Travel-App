import axios from 'axios'


export function submitPlacesSelection(data) {
  return dispatch => {
    return axios.post(`/api/trips`, data);
  }
}

export function getPlacesSelection(identifier) {
  return dispatch => {
    axios.get(`/api/trips/${identifier}`)
    .then((res) => (res.data.trip))
    .then((json) => {
      console.log(json);
    })
  }
}

// export function placesLoaded(data) {
//   return {
//     type: 'TRIPS_LOADED',
//     data: data
//   }
// }
