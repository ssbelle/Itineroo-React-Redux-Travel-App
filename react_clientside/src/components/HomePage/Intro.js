import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className="intro">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6">
                    <div id="intro-content">
                      <h2 className="section-header">What is Itineroo?</h2>
                      <p className="lead text-muted">
                        <li>Build a "wishlist" of destinations where you'd like to travel and experiences you'd like to have.</li>
                        <li> It doesn't have to be as fancy as a once-in-a-lifetime trip, either: the app is great for planning your annual family vacation (if you get to take one, that is), or if you want to just take a few day trips here or there. Of course, you can build your bucket-list of places you want to see before you die, and you can share that list with friends or family and collaborate with them on them.</li>
                      </p>
                  </div>
                </div>
              </div>
          </div>
      </section>
    );
  }
}
