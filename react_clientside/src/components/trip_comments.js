import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Comments extends React.Component {
  renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="btn-floating waves-effect waves-light red"
            // onClick={this.props.removeComment.bind(null, this.props., i)}
            onClick={this.removeComment(i)}
            // onClick={() => {
            //   props.handleCollapseSelected(props.location.index, false);
            //   props.onDelete(props.index);
            // }}
          >
            <i className="material-icons">clear</i>
          </button>
          {/* <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button> */}
        </p>
      </div>
    )
  }
  removeComment = (i) => () => {
    // TODO: Fix me so that 11 isn't hardcoded
    this.props.removeComment(this.props.tripId, i)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const tripId = this.props.tripId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(tripId, author, comment);
    this.refs.commentForm.reset();
  }
  render() {
    console.log('COMMENT PROPS', this.props);
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" id='login-form' onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="Name"/>
          <input type="text" ref="comment" placeholder="Comment"/>
          <input type="submit" hidden/>
          <div className="form-group-btn">
            <button className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">done</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Comments);
