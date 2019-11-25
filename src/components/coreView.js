import {Button, Col, Row} from "arwes";
import BlockChainView from "./blockChainView";
import BlockView from "./blockView";
import OdoRecordsView from "./odoRecordsView";
import React, { Component } from "react";
import {Link} from "react-router-dom";


class CoreComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Row className="buttonBar">
            <Col m={8}>
            </Col>
            <Col m={4}>
              <div className="pending-trans-div">
                <Link to={'/pending-transactions'}>
                  <Button animate show className="pending-records-button"> Pending Records </Button>
                </Link>
                {/*<Button animate show layer={"alert"}> Hacker View </Button>*/}
              </div>
            </Col>
          </Row>
          <Row className="blockChainParent">
            <BlockChainView blocks={this.props.blocks} setBlockInfo={this.props.setBlockInfo}/>
          </Row>
          <Row className="blockDetailsParent">
            <Col m={6}>
              <BlockView currentBlock={this.props.currentBlock} blocks={this.props.blocks}/>
            </Col>
            <Col m={6}>
              <OdoRecordsView currentBlock={this.props.currentBlock} blocks={this.props.blocks}/>
            </Col>
          </Row>
        </div>
  );
  }
}

export default CoreComponent;