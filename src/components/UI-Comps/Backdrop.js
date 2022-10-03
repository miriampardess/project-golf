import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

// המסך השחור שמאחורי הפופאפ
const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
