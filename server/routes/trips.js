import express from 'express';
import Trip from '../models/trip';

let router = express.Router();

router.post('/', (req, res) => {
  const { places_data } = req.body
  const { authorization } = req.headers
  console.log('POST')

  // Parse authorization header
  const token = authorization.split(' ')[1];
  console.log('token', token);

  // TODO: Decode token using JWT metho
  console.log(req.body)

  Trip.forge({places_data: JSON.stringify(req.body)}).save()
  .then(trip => res.json({success:true}))
  .catch(err => res.status(500).json({error: err}));
});

export default router;
