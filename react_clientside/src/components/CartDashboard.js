import React from 'react';
import PlacesList from './places_list';
import {Link} from 'react-router-dom';
import MiniCartDashboard from './cartdashboard/MiniCartDashboard';

export default class CartDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseSelected: {}
    };
    this.handleCollapseSelected = this.handleCollapseSelected.bind(this);
  }

  handleCollapseSelected(index, value) {
    this.setState({collapseSelected:{
      ...this.state.collapseSelected,
      [index]: value
    }});
  }

  render() {
    console.log('dashboard props', this.props);
    return (
      <section>
        <section className='info-bar'>
          <div className='direction-bar'>
            <span>You are going to love {this.props.searchTerm}!</span>
          </div>
        </section>
        <section className='combine-customize-sections'>
          <section>
            <h3>Select your Places of Interest</h3>
            <PlacesList
              results={this.props.results}
              selectPlace={this.props.selectPlace}
              city={this.props.searchTerm}
              dates={this.props.storeDates}
              collapseSelected={this.state.collapseSelected}
              handleCollapseSelected={this.handleCollapseSelected}
            />
          </section>
          <section>
            <MiniCartDashboard
              city={this.props.searchTerm}
              collapseSelected={this.collapseSelected}
              handleCollapseSelected={this.handleCollapseSelected}
            />
          </section>
        </section>
      </section>);
  }
}
