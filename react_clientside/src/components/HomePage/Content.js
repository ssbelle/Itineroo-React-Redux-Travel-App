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
                      <p>Created by Shawna Lehman and Dong H.</p>
                  </div>
                  <div className="col-sm-6">
                  	<h2 className="section-header">Ready to Itineroo?</h2>
                  	<p className="lead text-muted">Ready to take the stress out of extensive trip planning and collaborating procedures? Dynamically collaborate resources-to build the ultimate travel experience for the whole group.</p>
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
