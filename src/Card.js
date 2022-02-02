import React, { useState,useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "./cardcomp";

import axios from "axios";
//import data from './data.json'

function Card() {
  const [datac, setcards] = useState([]);
  

  useEffect(()=>{
    axios({
      url: "http://localhost:3001/",
      method: "GET",
    })
      .then((response) => {
        console.log('data aagyaaa ');
        console.log(response.data);
        setcards(response.data.cards);
        console.log(datac);
      })
      .catch((err) => {
        console.log('hahahaa error aagya');
        console.log(err);
      });
  
  },[datac]);
  
  return (
   <div>      
       <CardComponent cardData = {datac[0]}></CardComponent>
       <CardComponent cardData = {datac[1]}></CardComponent>
       <CardComponent cardData = {datac[2]}></CardComponent>
       <CardComponent cardData = {datac[3]}></CardComponent>
       <CardComponent cardData = {datac[4]}></CardComponent>
       </div>
 
  );
}

export default Card;
