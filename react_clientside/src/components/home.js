import React from 'react';
import {Link} from 'react-router-dom';

// ...
export default class Home extends React.Component {
render() {
  return (
    <header>
        <div className="header-content">
            <div className="header-content-inner">
                <h1>Travel</h1>
                <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                <Link to='/signup' className="btn btn-primary btn-lg">Signup</Link>
            </div>
        </div>
    </header>
  );
}
}
