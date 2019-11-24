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
          <Row style={{margin: 15}}>
            <Col m={8}>
            </Col>
            <Col m={4}>
              <div style={{textAlign: "right"}}>
                <Link to={'/pending-transactions'}>
                  <Button animate show style={{paddingRight: "20px"}}> Pending Records </Button>
                </Link>
                {/*<Button animate show layer={"alert"}> Hacker View </Button>*/}
              </div>
            </Col>
          </Row>
          <Row style={{width: "100%"}}>
            <BlockChainView blocks={this.props.blocks} setBlockInfo={this.props.setBlockInfo}/>
          </Row>
          <Row style={{width: "100%", height: "430px"}}>
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