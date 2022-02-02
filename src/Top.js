import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./stylee.css";

function TopComponent(props) {
  return (
    <Container fluid className="topp px-5 my-4">
      <Row>
        <Col lg={6}>
          <p className="para"> Home </p>
          <p className="para">
            / <b>Find a Designer</b>
          </p>
          <h1 className="heading mt-5 mb-1">
            <b>Find a Designer you'll Love </b>
          </h1>
          <h1 className="heading mb-3">
            <b>_</b>
          </h1>
          <p className="para">
            We have professional designers in over{" "}
            <a href="#" className="links">
              <u>90 design skill sets</u>
            </a>
            .<br />
            <a href="#" className="links">
              <u>Sign up</u>
            </a>{" "}
            to find the perfect designer for whatever you need.
          </p>
        </Col>
        <Col lg={3}>
          <img
            src="https://assets.99static.com/workbench/assets/images/designer-search-logged-out-header-9e99c15bdf.png"
            className="girlimg d-md-none d-sm-none d-none d-lg-block"
            alt="girl"
          ></img>
        </Col>
        <Col lg={3}>
          <div className="d-md-none d-sm-none d-none d-lg-flex">
            <p className="pt-5 ml-4">
              <i>"Book cover, done!"</i>
            </p>
            <p className=" mt-auto mb-1 d-md-none d-sm-none d-none d-lg-flex">
              <i>by usmanbutt</i>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopComponent;
