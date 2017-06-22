import React, {Component} from 'react';
import PlacesList from './places_list';
import {Link} from 'react-router-dom';
import CartDashboard from './CartDashboard';
import Calendar from './calendar';
import GooglePlacesSuggest from './GooglePlacesSuggest';

import {connect} from 'react-redux';
import {selectPlace, storeDates, goFetchLocations} from '../actions/index';

class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      processStep: 'step-1',
      processPath: false,
      datesTerm: '',
      selectedCoordinate: null
    };
  }

// Handle search change for where to?
  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

// Handle suggestions for where to?
  handleSelectSuggest = (suggest, coordinate) => {
    this.setState({searchTerm: suggest.description, selectedCoordinate: coordinate})
  }

  render() {
    // console.log('layout props', this.props);
    return (
      <main>
        {this.props.showResults
          ? <CartDashboard selectPlace={this.props.selectPlace} searchTerm={this.state.searchTerm} storeDates={this.state.datesTerm} results={this.props.locationsData}></CartDashboard>
          : <section className='creating-trip'>
            <section className='info-bar'>
              <div className='direction-bar'>TELL US ABOUT YOUR TRIP</div>
            </section>
            <img className='home-img' src='/static/images/travel-planning.jpg' mode='fit'/>

            <section className={`trip-section ${this.state.processStep}`}>
              <section className='choose-path-container'>
                <div className='path-container create'>
                  <span>CREATE A TRIP</span>
                  <button onClick={() => this.setState({processStep: 'step-2', processPath: 'create'})} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </button>
                </div>

                <div className='path-container join'>
                  <span>JOIN A TRIP</span>
                  <button onClick={() => this.setState({processStep: 'step-2', processPath: 'join'})} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </section>

              <section className='create-trip-section'>

                <i className="fa fa-arrow-left backBtn" aria-hidden="true" onClick={() => this.setState({processStep: 'step-1'})}>Back</i>
                {this.state.processPath === 'create'
                  ? <section className='path-forms'>
                      <div className='input-field'>
                        <GooglePlacesSuggest onChange={this.handleSearchChange.bind(this)} onSelectSuggest={this.handleSelectSuggest.bind(this)} query={this.state.searchTerm}/>
                      </div>
                      <div className='input-field'>
                        <input id="dates_input" type="text" className="dates" value={this.state.datesTerm} onChange={event => this.setState({datesTerm: event.target.value})}/>
                        <label>How many days are you travelling?</label>
                      </div>

                      {/* {console.log('dates', this.state.datesTerm)} */}

                      <button className='go-fetch-btn' onClick={() => {
                        this.props.storeDates(this.state.datesTerm);
                        this.props.goFetchLocations(this.state.searchTerm);
                      }}>Submit</button>
                    </section>
                  : <section className='path-forms'>
                    <div className='input-field'>
                      <input id="destination_input" type="text" className="validate" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}/>
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

const mapStateToProps = state => {
  console.log('layout mapState', state);
  return ({showResults: state.searchResults.showResults, locationsData: state.searchResults.locationsData, storeDates: state.datesTerm});
};

const mapDispatchToProps = dispatch => {
  // console.log('layout dispatch', dispatch);
  return {
    selectPlace: (place, city) => dispatch(selectPlace(place, city)),
    storeDates: (datesLength) => dispatch(storeDates(datesLength)),
    goFetchLocations(query) {
      goFetchLocations(query, dispatch);
    }
  };
};

export default connect(mapStateToProps, //grabbing pieces of information from global state
    mapDispatchToProps)(CreateTrip);
