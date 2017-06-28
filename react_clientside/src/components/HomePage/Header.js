import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import MapsFlight from 'material-ui/svg-icons/maps/flight';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className='home-page-header'>
        <div className="header-content">
          <div className="header-content-inner">
            <h1>Travel</h1>
            <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
            <Link to="/signup">
              <FlatButton style={{
                color: '#fff'
              }} label="Signup" labelPosition="before" primary={true} icon={< ContentCreate />}/>
            </Link>
            <Link to="/login">
              <FlatButton style={{
                color: '#fff'
              }} label="Login" labelPosition="before" primary={true} icon={< MapsFlight />}/>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
