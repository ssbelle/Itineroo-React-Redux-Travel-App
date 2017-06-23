import React from 'react';

const ListOfSelectionsItem = (props) => {
  return (
    <li>
      <div className='dash-item-img'></div>
      <div className='dash-item-text'>
        <span>
          {props.location.name}
        </span>
          <button className="btn-floating waves-effect waves-light red" onClick={ (e) => { props.onDelete(props.index) } }><i className="material-icons">clear</i></button>
      </div>
    </li>
  );
};


export default ListOfSelectionsItem;
