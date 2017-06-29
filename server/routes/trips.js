import express from 'express';
import authenticate from '../middlewares/authenticate';
import Trip from '../models/trip';

const router = express.Router();

// TODO consolidate these getters into one with smarter params

router.get('/user_id/:id', (req, res) => {
  console.log('trips request for user', req.params.id);
  Trip.query({
        where: {user_id: req.params.id}
      })
      .fetchAll()
      .then(trips => {
        console.log('\n\ntrips.js query user_id', trips.toJSON());
        res.send(trips.toJSON());
      });
});

router.get('/trip_id/:id', (req, res) => {
  console.log('trip request for trip_id', req.params.id);
  Trip.query({
        where: {trip_id: req.params.id}
      })
      .fetchAll()
      .then(places => {
        console.log('\n\ntrips.js query trip_id', req.params.id, places.toJSON());
        res.send(places.toJSON())
      })
      .catch(err => res.status(500).json({error: err}));
});

router.post('/submit', authenticate, (req, res) => {
  const user_id = req.currentUser.id;
  const trip_id = req.body.trip_id;
  const city = req.body.city;
  const places_data = req.body.places;
  console.log('\n\nCURRENT USER SUBMISSION TO DATABASE', user_id, req.body);
  Trip.forge({city, trip_id})
      .fetch().then(result => {
        result ?
        Trip.forge({
              id: result.attributes.id
            })
            .save({
              places_data: JSON.stringify(places_data)
            })
            .then(trip => res.json({ user: req.currentUser }))
            .catch(err => res.status(500).json({error: err})) :
        Trip.forge({
              user_id,
              trip_id,
              city,
              places_data: JSON.stringify(places_data)
            })
            .save()
            .then(trip => res.json({ user: req.currentUser }))
            .catch(err => res.status(500).json({error: err}));
  });

  // Trip.forge({
  //     user_id,
  //     trip_id,
  //     city
  //   })
  //   .save({
  //     places_data: JSON.stringify(places_data)
  //   })
  //   .then(trip => {
  //     console.log('\n\ntrip added', trip);
  //     res.json({ user: req.currentUser });
  //   })
  //   .catch(err => res.status(500).json({error: err}))
});

export default router;
