import React, { Component } from 'react';
import CheckBox from './checkBox';


function SideBarComp(props) {
    var values =  props.data[props.num];
  //  console.log('valllllllll');
   // console.log(values);
    

    return ( <div>  <input
        type="checkbox"
        id="lid"
        name="Logo and Identity"
        value="Price"
      />
      <label for="lid"> &nbsp;{values?.title} &nbsp;</label>
      <a
        href="#c1"
        role="button"
        className="links"
        data-toggle="collapse"
        data-target= "#c"
      >
        <img className="expandbutton" src="expand-button.png" />
      </a>{" "}
      <br />
      <div className="collapse ml-3 pb-3" id="c">
       <CheckBox name= {values?.sub1} ></ CheckBox>
        <br />
        <CheckBox name= {values?.sub2} ></ CheckBox>
      </div> </div> );
}

export default SideBarComp;