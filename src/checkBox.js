import React, { Component } from 'react';

function CheckBox(props) {
    var val  = props.name;
    return ( 
       <div> <input
        type="checkbox"
        id={val}
        name={val}
        value={val}
      />
      <label for={val}> &nbsp;{val} &nbsp;</label> <br/> </div> 
     );
}

export default CheckBox;