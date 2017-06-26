import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}

  render() {
      console.log('Photo', this.props);
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          {/* <Link to={`view/${this.props.post.id}`}>
          TEST


          </Link> */}
          <img src="http://www.essortment.com/images/vacation-travel-destinations.jpg" className="grid-photo" />

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={this.props.likes[this.props.post.id -1].likes} className="likes-heart">{this.props.likes[this.props.post.id -1].likes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <Link to={`view/${this.props.post.id}`}>
          <p>{this.props.post.city} - Trip # {this.props.post.id}</p>
          </Link>
          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, this.props.post.id - 1)}
              className="likes">&hearts;{this.props.likes[this.props.post.id - 1].likes}
            </button>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {this.props.comments[this.props.post.id - 1] ? this.props.comments[this.props.post.id - 1].length : 0 }
              </span>
            {/* </Link> */}
          </div>
        </figcaption>

      </figure>
    );
  }
}

function mapStateToProps(state) {
  return {
    likes: state.likes,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Photo);
