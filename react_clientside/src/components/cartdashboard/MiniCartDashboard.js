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
    debugger;
    this.props.submitPlacesSelection(this.props.places).then(() => {
      debugger;
      this.context.router.history.push('/real-dashboard');
    })
  }

  render() {
    // console.log('ALL SELECTIONS',this.props)
    // debugger;
    return (
      <div>
        <section className='dash-section'>
          <ListOfSelections places={this.props.places} onItemDelete={this.props.handleItemDelete}/>
        </section>
        <section className='dash-section'>
          <button onClick={this.onClickHandler} className="btn waves-effect waves-light">Submit</button>
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
