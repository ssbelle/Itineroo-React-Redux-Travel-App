import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    console.log('Photo Grid', this.props)
    return (
      <div className="photo-grid">
        {this.props.posts.map((post) => <Photo key={post.id} id={post.id} post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;
