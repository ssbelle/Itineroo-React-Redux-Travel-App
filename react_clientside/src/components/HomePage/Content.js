import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import MapsFlight from 'material-ui/svg-icons/maps/flight';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className="content">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6">
                      <img className="img-responsive img-circle center-block" src="/static/images/travelroo-logo.jpg" alt=""/>
                  </div>
                  <div className="col-sm-6">
                  	<h2 className="section-header">Best in Class</h2>
                  	<p className="lead text-muted">Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    <Link to="/login">
                      <FlatButton style={{
                        color: '#fff'
                      }} label="Login" labelPosition="before" primary={true} icon={< MapsFlight />}/>
                    </Link>
                  </div>

              </div>
          </div>
      </section>
    );
  }
}
