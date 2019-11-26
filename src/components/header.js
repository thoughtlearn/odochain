import React from 'react';
import {Col, Header, Heading, Row} from "arwes";
import {Link} from "react-router-dom";

const OdoHeader = () => (
  <Header animate show className="headerBar">
    <Row className="marginTwenty">
      <Col m={6}>
        <Link to={"/"} className="headerLogo">
        <Heading node='h1' className="odoHeaderText">ODOChain </Heading>

        </Link>
      </Col>
      <Col m={6}>
        <Heading node='h1' className="gn-name" theme="dark">Geek Night 2019 </Heading>
      </Col>
    </Row>
  </Header>
);

export default OdoHeader;