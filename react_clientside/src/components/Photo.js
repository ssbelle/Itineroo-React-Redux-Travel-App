import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}

  render() {
      console.log('Photo', this.props);
    return (
    <figure>
    {
          // <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          //   <span key={this.props.likes[this.props.post.id -1].likes} className="likes-heart">{this.props.likes[this.props.post.id -1].likes}</span>
          // </CSSTransitionGroup>
}

          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, this.props.post.id - 1)}
              className="likes">&hearts;{this.props.likes[this.props.post.id - 1].likes}
            </button>
            <Badge
              badgeContent={this.props.likes[this.props.post.id - 1].likes}
              primary={true}
              badgeStyle={{top: 12, right: 12}}
              >
                <IconButton tooltip="Likes" onTouchTap={this.props.increment.bind(null, this.props.post.id - 1)}>
                <FavoriteIcon />
                </IconButton>
            </Badge>
            <Badge
              badgeContent={this.props.comments[this.props.post.id] ? this.props.comments[this.props.post.id].length : 0 }
              primary={true}>
              <CommentIcon/>
            </Badge>

            {/* </Link> */}
          </div>
        

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
