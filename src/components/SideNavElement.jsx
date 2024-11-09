import React from 'react';
import './index.css';

const SideNavElement = (props) => {
  return (
    <div className="sideNavEle" style={{display:'flex'}}>
        <div style={{paddingRight: 15}}>{props.icon}</div>
        <div>{props.name}</div>
    </div>
  )
}

export default SideNavElement;