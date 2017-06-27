import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import Header from './header'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Header/>
    );
  }
}
