import React, { Component } from "react";
import data from "./data.json";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";

function CardComponent(props) {
  var ar = "->";
  const imgStyle = {
    width: '100%',
    height:'60%'
  }
  var values = props.cardData;
 
  return (
  <div>

      <div className="search pt-2" style= {{display:"flex"}}>
          <h4 style= {{display: "inline-block", fontFamily: "Arial"}}> <b>{values?.header1} </b></h4>
          <p className="links1" style= {{display:"inline-block", marginLeft: "auto", marginRight: "0px"}}><a style={{textDecoration:"none",color: "black"}}  href="#" ><b>See all Results {ar}</b></a></p>
          
      </div>
      
      <Container> 
          <Row>

              <Col  lg={3} md={3} sm={12} className = "mr-4">
                  <div className="card mt-4 w-sm-100" >
                      <div className="card-header"  style={{backgroundColor : "white"}} >
                          <img src={values?.profile1} className="mb-2 mt-2" style={{display:"inline-block",borderRadius: "50%", height:"65px", width:"70px"}} />
                  <p className="para">{values?.name1}</p><br/>
                          <p className="mb-1" style={{display:"inline", border:"1px solid black", fontSize:"13px", width:"fit-content", color:"grey", padding: "1px 8px 1px 8px"}}>{values?.level1}</p>
                   
               </div>
                   <img src={values?.image1} className="card-img-bottom" style={imgStyle} /> 
                  </div>
             </Col>
       

             <Col  lg={3} md={3} sm={12} className = "mx-3 ">
              <div className="card mt-4 w-sm-100 " >
                  <div className="card-header"  style={{backgroundColor : "white"}} >
                      <img src={values?.profile2} className="mb-2 mt-2" style={{display:"inline-block",borderRadius: "50%", height:"65px", width:"70px"}} />
              <p className="para">{values?.name2} </p><br/>
                      <p className="mb-1" style={{display:"inline", border:"1px solid black", fontSize:"13px", width:"fit-content", color:"grey", padding: "1px 8px 1px 8px"}}>{values?.level2}</p>
               
           </div>
               <img src={values?.image2} className="card-img-bottom" style={imgStyle} /> 
              </div>
         </Col>

         <Col  lg={3} md={3} sm={12} className = "ml-4">
          <div className="card mt-4 w-sm-100">
              <div className="card-header"  style={{backgroundColor : "white"}} >
                  <img src={values?.profile3} className="mb-2 mt-2" style={{display:"inline-block",borderRadius: "50%", height:"65px", width:"70px"}}/>
          <p className="para">{values?.name3}</p><br/>
                  <p className="mb-1" style={{display:"inline", border:"1px solid black", fontSize:"13px", width:"fit-content", color:"grey", padding: "1px 8px 1px 8px"}}>{values?.level3}</p>
           
       </div>
           <img src={values?.image3} className="card-img-bottom" style={imgStyle} /> 
          </div>
     </Col>
      
          

         </Row>

     </Container> </div>);
}

export default CardComponent;
