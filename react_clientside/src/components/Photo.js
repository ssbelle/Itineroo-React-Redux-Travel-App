import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log('Photo', this.props);
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
          {/* <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            </Link>
          </div> */}
        </figcaption>

      </figure>
    );
  }
}
