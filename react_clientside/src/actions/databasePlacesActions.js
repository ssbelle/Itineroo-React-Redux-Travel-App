import axios from 'axios'


export function submitPlacesSelection(data) {
  console.log('calling submitPlacesSelection')
  return dispatch => {
    debugger
    // console.log('databasePlacesActions', data)
    // TODO: Add a header the request
    // Authorization: Bearer: klsdkjadsajadfs;lad;sfla

    // TODO: Get the token from local storage and pass in url query params
    return axios.post(`/api/trips`, data);
    // return axios.post(`/api/trips?token=${}`, data);
  }
}
