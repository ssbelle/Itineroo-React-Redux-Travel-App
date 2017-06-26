import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: {
        1: [
          {
            "likes": 10,
          }
        ]
      },
  }
}

  render() {
      console.log('Photo', this.props);
      console.log('STATE', this.state);
      // console.log('LIKES', this.state.likes[1])
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          {/* <Link to={`view/${this.props.post.id}`}>
          TEST

            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link> */}

          {/* <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup> */}

        </div>

        <figcaption>
          <Link to={`view/${this.props.post.id}`}>
          <p>{this.props.post.city} - Trip # {this.props.post.id}</p>
          </Link>
          <div className="control-buttons">
            <button className="likes">&hearts;
              {this.state.likes[1][0].likes}
            </button>
            {/* <span>
            {this.state.likes[1][0].likes}
          </span> */}
            {/* <button
              // onClick={this.props.increment.bind(null, i)}
              className="likes">&hearts; {this.state.likes[this.props.post.id].likes}</button> */}
            {/* <Link className="button" to={`/view/${post.code}`}> */}
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {this.props.comments[this.props.post.id] ? this.props.comments[this.props.post.id].length : 0 }
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
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Photo);
