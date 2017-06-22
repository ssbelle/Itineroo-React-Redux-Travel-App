import React from 'react';
import { connect } from 'react-redux';
import ListOfSelections from './ListOfSelections';
import { deletePlace } from '../../actions'

const MiniCartDashboard = (props) => {
  // console.log('props',props)
  return (
    <div>
    <section className='dash-section'>
      <ListOfSelections places={props.places} onItemDelete={props.handleItemDelete}/>
    </section>
    </div>

  );
};

const mapStateToProps = state => {
  console.log("MiniCartDashboard", state);
  return {
    places: state.selectedPlaces.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleItemDelete: (index) => {
      dispatch(deletePlace(index))
    }
  }
}
export default connect(
  mapStateToProps, //grabbing pieces of information from global state,
  mapDispatchToProps
)(MiniCartDashboard);
