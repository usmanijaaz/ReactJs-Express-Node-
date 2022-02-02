import React, { useState,useEffect } from 'react';
import TopComponent from "./Top";
import "./stylee.css";
import SideBar from "./SideBar";
import Card from "./Card";
import { Container, Row, Col, } from "react-bootstrap";
function BaseComp() {

    return (
         <div>
        <TopComponent></TopComponent>
        <Container >
          <Row>
            <Col  lg={3} md={12} sm={12}>
        <SideBar ></SideBar>
        </Col>
        <Col  lg={9} md={12} sm={12}>
        <Card></Card>
        </Col>
        </Row>
        </Container>
        </div>
     );
}

export default BaseComp;
