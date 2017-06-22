import React from 'react';
import { findDOMNode } from 'react-dom';

const ListOfSelectionsItem = (props) => {
  console.log('SELECTION', props);
  return (
    <li>
      <div className='dash-item-img'></div>
      <div className='dash-item-text'>
        <span>
          {props.location.name}
        </span>
          <button className="btn-floating waves-effect waves-light red"><i className="material-icons">clear</i></button>
      </div>
    </li>
  );
};

export default ListOfSelectionsItem;
