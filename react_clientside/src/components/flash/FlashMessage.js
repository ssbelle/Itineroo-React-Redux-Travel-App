import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div id="floating_alert">
      <div className="container-fluid ">
        <div className="row">
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      }, 'fade', 'in')}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    </div>
    </div>
  </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
