import React from 'react';
import {Blockquote, Col, Footer, Heading, Row} from "arwes";

const OdoFooter = () => (
    <Footer animate style={{ position: "absolute", bottom: 0, width:"100%"}}>
      <div style={{textAlign:"center", paddingTop:"10px", align:"center"}}>
        <Row style={{margin: "0px"}}>
          <Col m={10}>
            <Heading node='h4' style={{margin:"0px"}}>Let's build BlockChain! by Sanjeev Subramaniam & Raja Syed </Heading>
          </Col>
          <Col m={2} style={{textAlign:"left", paddingLeft:"110px", paddingBottom:10}}>
            <Blockquote data-layer='disabled' style={{margin: "0px"}}> ThoughtWorks </Blockquote>
          </Col>
        </Row>
      </div>
    </Footer>
);

export default OdoFooter;