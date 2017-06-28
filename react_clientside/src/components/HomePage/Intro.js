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
                  <div className="col-lg-8 col-lg-offset-2">
                  	<span className="glyphicon glyphicon-apple"></span>
                      <h2 className="section-heading">Completely synergize resource taxing relationships</h2>
                      <p className="text-light">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
