import React from 'react';
import { connect } from 'react-redux';
import ListOfSelections from './ListOfSelections';

const MiniCartDashboard = (props) => {
  console.log('props',props)
  return (
    <div>
    <section className='dash-section'>
      <ListOfSelections places={props.places}/>
    </section>
    </div>

  );
};

const mapStateToProps = state => {
  console.log("MiniCartDashboard", state);
  return {
    places: state.selectedPlaces.places,
  };
};

export default connect(
  mapStateToProps //grabbing pieces of information from global state
)(MiniCartDashboard);
