import React, { Component } from 'react';
import PlacesList from './places_list';
import {Link} from 'react-router-dom';
import Dashboard from './dashboard';
import Calendar from './calendar';

import { connect } from 'react-redux';
import { selectPlace, goFetchLocations } from '../actions/index';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      processStep: 'step-1',
      processPath: false
    };
  }

  render() {
    return (
    <main>
    {this.props.showResults ?
      <Dashboard
        selectPlace={this.props.selectPlace}
        searchTerm={this.state.searchTerm}
        results={this.props.locationsData}>
      </Dashboard> :

      <section className='creating-trip'>
        <section className='info-bar'>
          <div className='direction-bar'>TELL US ABOUT YOUR TRIP</div>
        </section>
        <img className='home-img' src='images/travel-planning.jpg' mode='fit' />

        <section className={`trip-section ${this.state.processStep}`}
        >
          <section className='choose-path-container'>
            <div className='path-container create'>
              <span>CREATE A TRIP</span>
              <button
                onClick={()=>
                 this.setState({processStep: 'step-2', processPath: 'create'})
                }
                className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
              </button>
            </div>

            <div className='path-container join'>
              <span>JOIN A TRIP</span>
              <button
                onClick={()=>
                  this.setState({processStep: 'step-2', processPath: 'join'})
                }
                className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
              </button>
            </div>
          </section>

          <section className='create-trip-section'>



          <i className="fa fa-arrow-left backBtn" aria-hidden="true" onClick={()=>this.setState({processStep:'step-1'})}>back</i>
            {this.state.processPath === 'create' ?

              <section className='path-forms'>
              <div className='input-field'>
                <input id="destination_input" type="text" className="validate" value={this.state.searchTerm} onChange={event=>this.setState({searchTerm: event.target.value})} />
                <label>Where are you going?</label>
              </div>
              <button className='go-fetch-btn' onClick={() => this.props.goFetchLocations(this.state.searchTerm)}>click me</button>
              </section> :

              <section className='path-forms'>
              <div className='input-field'>
                <input id="destination_input" type="text" className="validate" value={this.state.searchTerm} onChange={event=>this.setState({searchTerm: event.target.value})} />
                <label>"Who" are you uhuuhuuuhuuhh?</label>
              </div>
              <button className='go-fetch-btn' onClick={() => this.props.goFetchLocations(this.state.searchTerm)}>click me</button>
              </section>}
          </section>
        </section>





      </section>
    }
    </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('layout mapState', state);
  return ({
    showResults: state.searchResults.showResults,
    locationsData: state.searchResults.locationsData
  });
};

function mapDispatchToProps(dispatch) {
  // selectPlace //this.props.selectPlace()
  return {
    selectPlace: place =>
      dispatch(selectPlace(place)),
    goFetchLocations(query) {
      goFetchLocations(query, dispatch);
    }
  };
}

export default connect(
  mapStateToProps, //grabbing pieces of information from global state
  mapDispatchToProps
)(Layout);
