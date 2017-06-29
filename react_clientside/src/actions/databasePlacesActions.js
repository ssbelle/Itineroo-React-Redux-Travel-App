import axios from 'axios';
import {isEqual} from 'lodash';

export const submitPlacesSelection = query =>
  axios.post('/api/trips/submit', query.data)
    .then((result) => result);

export const getPlacesSelection = (dispatch, prev, query) => {
  axios.get(`/api/trips/${query.type}/${query.id}`)
    .then(results => results.data)
    .then(trips =>
      !isEqual(trips, prev)
       && dispatch({
        type: 'TRIP_LOADED',
        data: trips
      })
    );
}
