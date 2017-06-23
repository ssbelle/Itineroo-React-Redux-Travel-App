import express from 'express';
import authenticate from '../middlewares/authenticate';
import Trip from '../models/trip';

let router = express.Router();

router.get('/:identifier', (req, res) => {
  console.log('HIT ROUTE ENDPOINT FOR GETTING TRIPS');
  Trip.query({
    select: [ 'id', 'user_id', 'places_data' ],
    where: { user_id: req.params.identifier },
  }).fetch().then(trip => {
    res.json({ trip });
  });
});

router.post('/', authenticate, (req, res) => {
  const places_data = req.body
  const user_id = req.currentUser.id
  console.log('CURRENT USER SUBMISSION TO DATABASE', user_id)

  Trip.forge({places_data: JSON.stringify(places_data), user_id: user_id }).save()
  .then(trip => res.json({ user: req.currentUser }))
  .catch(err => res.status(500).json({error: err}));
});

export default router;
