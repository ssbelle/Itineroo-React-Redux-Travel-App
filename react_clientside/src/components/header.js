import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';

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
                <button onClick={this.onClick} className="btn btn-primary btn-lg">Signup</button>
            </div>
        </div>
    </section>
  );
}
}
