import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ListOfSelections from './ListOfSelections';
import {deletePlace} from '../../actions';
import {submitPlacesSelection} from '../../actions/databasePlacesActions';

class MiniCartDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    // changed this.props.places
    this.props.submitPlacesSelection(this.props)
    .then(() => {
      this.context.router.history.push('/real-dashboard');
    })
  }

  render() {
    // console.log('ALL SELECTIONS',this.props)
    return (
      <div className='cart-selections-container'>
      <button onClick={this.onClickHandler} className="submit btn waves-effect waves-light">Submit your Selections</button>
        <section className='dash-section'>
          <ListOfSelections places={this.props.places} onItemDelete={this.props.handleItemDelete}/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("MiniCartDashboard", state);
  return {places: state.selectedPlaces.places};
};

const mapDispatchToProps = dispatch => {
  return {
    handleItemDelete: (index) => {
      dispatch(deletePlace(index))
    },
    submitPlacesSelection: (places) => {
      return dispatch(submitPlacesSelection(places))
    }
  }
}

MiniCartDashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, //grabbing pieces of information from global state,
    mapDispatchToProps)(MiniCartDashboard);
