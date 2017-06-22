import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config';

import users from './routes/users';
import auth from './routes/auth';
// import events from './routes/events';

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/data', (req, res) => {
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA9efXqLIJ9cH186C2AxuMjXpRRRXVpePY&query=${req.query.query}%20top%20places%20to%20see&radius=5000&sensor=false&0&libraries=places`
    //AIzaSyDTPU6hai6_STJicsn_FPXGfnCb71kPdYgw old expired
    //AIzaSyA9efXqLIJ9cH186C2AxuMjXpRRRXVpePY newest
    //dongs AIzaSyBjzANaHMSwi5Rss6Kgr2dB2H4eJLLrfbg
  // fetch('./fakeState.json')
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(locationsData => {
    res.json(locationsData);
  });
});

// app.use('/api/events', events);
var staticRoute = __dirname + '/../react_clientside/public';

app.use('/static', express.static(staticRoute));
console.log('dirname', __dirname);
console.log('staticRoute', staticRoute)

// const compiler = webpack(webpackConfig);



// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: "http://localhost:3200",
//   // noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'))
