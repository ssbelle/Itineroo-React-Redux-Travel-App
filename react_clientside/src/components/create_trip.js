import React, { Component } from 'react';
import PlacesList from './places_list';
import {Link} from 'react-router-dom';
import Dashboard from './dashboard';
import CustomizeTrip from './customize_trip';
import Dashbaord from './dashboard';
import Calendar from './calendar';

import { connect } from 'react-redux';
import { selectPlace, storeDates, goFetchLocations } from '../actions/index';


function generateRandomString(length, chars) {
  let r = '';
  for (let i = length; i > 0; --i) r += chars[Math.round(Math.random() * (chars.length - 1))];
  return r;
}

//this function is not aclled anywhere
//we talked about you using this in your customize trip //getTripID(generateRandomString(10,'0123456789abcdefghijklmnOPQRSTUVWXYZ'));

class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      processStep: 'step-1',
      processPath: false,
      searchTerm: props.searchTerm,
      getTripID: ''
    };
  }

  // getInitialState

  render() {

    return (
    <main>
    {this.props.showResults ?
      <CustomizeTrip path='/customize-trip'
        searchTerm={this.state.searchTerm}
        storeDates={this.state.datesTerm}
        results={this.props.locationsData}
        selectPlace={this.props.selectPlace}
        currentUser={this.props.currentUser}
      /> :

      <section className='creating-trip'>
        <section className='info-bar'>
          <div className='direction-bar'></div>
        </section>


        <section className={`trip-section ${this.state.processStep}`}>
          <section className='choose-path-container'>
            <div className='path-container create'>
              <button
                onClick={()=> {
                  this.setState({processStep: 'step-2', processPath: 'create'});
                }
                }
                className="path-btn create-a-trip-btn waves-effect waves-light btn">
                <img src='/static/images/create-a-trip-btn.png' />
              </button>
            </div>

            <div className='path-container join'>

              <button
                onClick={()=>
                  this.setState({processStep: 'step-2', processPath: 'join'})
                }
                className="path-btn create-a-trip-btn waves-effect waves-light btn">
                <img src='/static/images/join-a-trip-btn.png' />

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
            <div className='input-field'>
              <input id="dates_input" type="text" className="dates" value={this.state.datesTerm} onChange={event=>this.setState({datesTerm: event.target.value})} />
              <label>How many days are you travelling?</label>
            </div>
            {console.log('dates', this.state.datesTerm)}
            <button className='go-fetch-btn' onClick={() => {
              this.props.storeDates(this.state.datesTerm || '');
              this.props.goFetchLocations(this.state.searchTerm);
            }}
            >click me</button>
          </section> :


          <section className='path-forms'>
          <div className='input-field'>
            <input id="destination_input" type="text" className="validate" value={this.state.searchTerm} onChange={event=>this.setState({searchTerm: event.target.value})} />
            <label>"Who" are you uhuuhuuuhuuhh?</label>
          </div>
          <button className='go-fetch-btn' onClick={() => {
            this.props.goFetchLocations(this.state.searchTerm);
          }}>click me</button>
          </section>}
          </section>
        </section>
      </section>
    }
    </main>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  console.log('layout mapState', state, ownProps);
  return ({
    showResults: state.searchResults.showResults,
    locationsData: state.searchResults.locationsData,
    storeDates: state.datesTerm,
    searchTerm: state.searchResults.searchTerm,
    getTripID: state.tripID,
    currentUser: state.auth.user
  });
};


const mapDispatchToProps = dispatch => {
  //console.log('layout dispatch', dispatch);
  return {
    selectPlace: (place, city, user, tripID) =>
      dispatch(selectPlace(place, city, user, tripID)),
    storeDates: (datesLength) =>
      dispatch(storeDates(datesLength)),
    getTripID: (tripID) =>
      dispatch(getTripID(tripID)),
    goFetchLocations(query) {
      goFetchLocations(query, dispatch);
    }
  };
};


export default connect(
  mapStateToProps, //grabbing pieces of information from global state
  mapDispatchToProps
)(CreateTrip);
