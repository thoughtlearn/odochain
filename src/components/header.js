import React from 'react';
import {Col, Header, Heading, Row} from "arwes";
import {Link} from "react-router-dom";

const OdoHeader = () => (
  <Header animate style={{paddingBottom: "0px"}}>
    <Row style={{ margin: 20 }}>
      <Col m={6}>
        <Link to={"/"} style= {{textDecoration: 'none'}}>
        <Heading node='h1'>ODOChain </Heading>

        </Link>
      </Col>
      <Col m={6}>
        <Heading node='h1' style={{ textAlign: "right"}} theme="dark">Geek Night 2019 </Heading>
      </Col>
    </Row>
  </Header>
);

export default OdoHeader;