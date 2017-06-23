import express from 'express';
import authenticate from '../middlewares/authenticate';
import Trip from '../models/trip';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
  const places_data = req.body
  const user_id = req.currentUser.id
  console.log('CURRENT USER SUBMISSION TO DATABASE', user_id)

  Trip.forge({places_data: JSON.stringify(places_data), user_id: user_id }).save()
  .then(trip => res.json({ user: req.currentUser }))
  .catch(err => res.status(500).json({error: err}));
});

export default router;
