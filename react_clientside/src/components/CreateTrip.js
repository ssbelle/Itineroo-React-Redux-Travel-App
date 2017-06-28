import React, {Component} from 'react';
import CartDashboard from './CartDashboard';
// import Calendar from './calendar';
import GooglePlacesSuggest from './GooglePlacesSuggest';
import {connect} from 'react-redux';
import {selectPlace, storeDates, fetchGoogleData} from '../actions/';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UndoIcon from 'material-ui/svg-icons/content/undo';

class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      searchTerm: '',
      processStep: 'step-1',
      processPath: false,
      datesTerm: '',
      selectedCoordinate: null
    };
  }

  // Handle search change for where to?
  handleSearchChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  // Handle suggestions for where to?
  handleSelectSuggest(suggest, coordinate) {
    this.setState({searchTerm: suggest.description, selectedCoordinate: coordinate});
  }

  render() {
    // console.log('layout props', this.props);
    let buttonClass = 'go-fetch-btn';
    if (this.state.clicked) {
      buttonClass += ' onclic';
    }
    return (
      <main>
        {this.props.showResults ?
          <CartDashboard
            selectPlace={this.props.selectPlace}
            searchTerm={this.state.searchTerm}
            storeDates={this.state.datesTerm}
            results={this.props.locationsData}
          />
          : <section className='creating-trip'>
            <section className='info-bar'>
              <div className='direction-bar'></div>
            </section>
            <section className={`trip-section ${this.state.processStep}`}>
              <section className='choose-path-container'>
                <div className='path-container create'>
                  <button onClick={() => this.setState({processStep: 'step-2', processPath: 'create'})} className="path-btn create-a-trip-btn waves-effect waves-light btn">
                    <img src='/static/images/create-a-trip-btn.png'/>
                  </button>
                </div>

                <div className='path-container join'>
                  <button onClick={() => this.setState({processStep: 'step-2', processPath: 'join'})} className="path-btn create-a-trip-btn waves-effect waves-light btn">
                    <img src='/static/images/join-a-trip-btn.png'/>
                  </button>
                </div>
              </section>

              <section className='create-trip-section'>
                <FloatingActionButton mini={true} disabled={false} iconStyle={{backgroundColor: 'teal'}}>
                  <UndoIcon onClick={() => this.setState({processStep: 'step-1'})}/>
                </FloatingActionButton>
                {this.state.processPath === 'create' ?
                  <section className='path-forms'>
                    <h1>CREATE A TRIP</h1>
                    <div className='input-field'>
                      <GooglePlacesSuggest onChange={this.handleSearchChange.bind(this)} onSelectSuggest={this.handleSelectSuggest.bind(this)} query={this.state.searchTerm}/>
                    </div>
                    {/* <div className='input-field'>
                      <input id="dates_input" type="text" className="dates" value={this.state.datesTerm} onChange={event => this.setState({datesTerm: event.target.value})}/>
                      <label>How many days are you travelling?</label>
                    </div> */}

                      {/* {console.log('dates', this.state.datesTerm)} */}

                      <button className={buttonClass} onClick={() => {
                        this.setState({clicked: true});
                        this.props.storeDates(this.state.datesTerm || '');
                        this.props.goFetchLocations(this.state.searchTerm);
                      }}>CREATE!</button>
                    </section>
                  : <section className='path-forms'>
                    <h1>JOIN A TRIP</h1>
                    <div className='input-field'>
                      <input id="destination_input" type="text" className="validate" value={this.state.searchTerm} onChange={() => {
                      }}/>
                      <label>Enter your Trip ID here!</label>
                    </div>
                    <button className='go-fetch-btn' onClick={() => {
                      console.log('attach this btn to a function that selects the trip id from the db and shows those choices');
                    }}>Join!</button>
                  </section>
}
              </section>
            </section>
          </section>
}
      </main>
    );
  }
}

const mapStateToProps = state => {
  //console.log('layout mapState', state);
  return ({showResults: state.searchResults.showResults, locationsData: state.searchResults.locationsData, storeDates: state.datesTerm});
};

const mapDispatchToProps = dispatch => {
  // console.log('layout dispatch', dispatch);
  return {
    selectPlace: (place, city) => dispatch(selectPlace(place, city)),
    storeDates: (datesLength) => dispatch(storeDates(datesLength)),
    goFetchLocations(query) {
      fetchGoogleData(dispatch, {type:'place', destination:query});
    }
  };
};

export default connect(mapStateToProps, //grabbing pieces of information from global state
    mapDispatchToProps)(CreateTrip);
