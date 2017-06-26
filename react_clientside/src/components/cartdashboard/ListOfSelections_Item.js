import React from 'react';

const ListOfSelectionsItem = (props) => {
  return (
    <li>
      <button
        className="btn-floating waves-effect waves-light red"
        onClick={() => {
          props.handleCollapseSelected(props.location.index, false);
          props.onDelete(props.index);
        }}
      >
        <i className="material-icons">clear</i>
      </button>
      <div className='dash-item-img'></div>
      <div className='dash-item-text'>
        <span>
          {props.location.name}
        </span>
      </div>
    </li>
  );
};


export default ListOfSelectionsItem;
