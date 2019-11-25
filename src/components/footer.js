import React from 'react';
import {Blockquote, Col, Footer, Heading, Row} from "arwes";

const OdoFooter = () => (
    <Footer animate className="footerBar">
      <div className="footerDiv">
        <Row className="margin-zero">
          <Col m={10}>
            <Heading node='h4' className="marginZero">Let's build BlockChain! by Sanjeev Subramaniam & Raja Syed </Heading>
          </Col>
          <Col m={2}>
            <Blockquote data-layer='disabled' className="tw-name"> ThoughtWorks </Blockquote>
          </Col>
        </Row>
      </div>
    </Footer>
);

export default OdoFooter;