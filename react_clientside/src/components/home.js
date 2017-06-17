import React from 'react';
// import Layout from './layout';
import {Link} from 'react-router-dom';
// import Images from './components/images';


const Home = () => {
  return (
    <section>
      <section className='info-bar'>
        <div className='direction-bar'></div>
      </section>
      <section>
        <img className='home-img' src='images/travel-planning.jpg' mode='fit' />
      </section>
      <footer>
        <div className='footer teal'/>
      </footer>
    </section>


  );
};

export default Home;
