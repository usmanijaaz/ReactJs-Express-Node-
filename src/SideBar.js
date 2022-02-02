import React, { useState,useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dataa from './sideData.json'
import SideBarComp from "./sideBarComps";
import CheckBox from './checkBox';

import axios from "axios";


function SideBar(props) {
 
  const [datab, setcategories] = useState([]);
  

useEffect(()=>{
  axios({
    url: "http://localhost:3001/",
    method: "GET",
  })
    .then((response) => {
      console.log('data aagyaaa ');
      console.log(response.data);
      setcategories(response.data.categories);
      console.log(datab);
    })
    .catch((err) => {
      console.log('hahahaa error aagya');
      console.log(err);
    });

},[datab]);


  return (
    <div>
          <input
            className="col-sm-12 col-md-12   searchblock"
            type="text"
            name="cat"
            id="category"
            placeholder="Search Keywords"
            size="15"
          />
          <p className="col-sm-12 col-md-12  retro">
            eg. retro, minimal, bear, mystery
          </p>

          <button
            className="btn btn-lg d-lg-none d-md-none d-sm-block filterbtn"
            data-toggle="collapse"
            data-target="#sidemenu"
          >
            Filters{" "}
            <img src="drop-down-arrow.png" className="expandbutton links" />{" "}
          </button>

          <div
            className="collapse d-sm-block d-md-collapse d-md-none d-lg-block"
            id="sidemenu"
          >
            <p className="mt-4">
              <b>Categories</b>
            </p>
          
    <SideBarComp data = {datab} num = {0} ></SideBarComp>
    
    <SideBarComp data = {datab} num = {1} ></SideBarComp>
    
    <SideBarComp data = {datab} num = {2} ></SideBarComp>
    
    <SideBarComp data = {datab} num = {3} ></SideBarComp>
    
    <SideBarComp data = {datab} num = {4} ></SideBarComp>
    
    <SideBarComp data = {datab} num = {5} ></SideBarComp>
    
            <p className="mt-4">
              <b>Industries</b>
            </p>
            <CheckBox name = ' Business and Consulting' ></ CheckBox>
            <CheckBox name = ' Food and Drink' ></ CheckBox>
            <CheckBox name = 'Medical and Pharmaceutical' ></ CheckBox>
            <CheckBox name = 'Retail' ></ CheckBox>
            <CheckBox name = 'Technology' ></ CheckBox>
            <div className="collapse" id="collapseExample">
             <CheckBox name = 'Business and Advertising' ></ CheckBox>
             <CheckBox name = 'Food and Drink' ></ CheckBox>
              <CheckBox name = 'Medical and Pharmaceutical' ></ CheckBox>
              <CheckBox name = 'Retail' ></ CheckBox>
              <CheckBox name = 'Technology' ></ CheckBox>
            </div>
            <a
              href="#collapseExample"
              className="links"
              data-toggle="collapse"
              data-target="#collapseExample"
            >
              Show more
            </a>
            <p className="mt-4">
              <b>Designer Level</b>
            </p>
            <CheckBox name = 'Top Level' ></ CheckBox>
            <CheckBox name = 'Medium Level' ></ CheckBox>
            <CheckBox name = 'Entry Level' ></ CheckBox>
            <p className="mt-4">
              <b>Language</b>
            </p>
            <CheckBox name = 'Chinese ' ></ CheckBox>
            <CheckBox name = 'English' ></ CheckBox>
            <CheckBox name = 'French' ></ CheckBox>
            <CheckBox name = 'Urdu' ></ CheckBox>
            <CheckBox name = 'Spanish' ></ CheckBox>
            <CheckBox name = 'Italian' ></ CheckBox>
            <CheckBox name = 'Arabic' ></ CheckBox>
          </div>
          </div>
  );
}

export default SideBar;
