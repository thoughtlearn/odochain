import {Button, Col, Row} from "arwes";
import BlockChainView from "./blockChainView";
import BlockView from "./blockView";
import OdoRecordsView from "./odoRecordsView";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import FindCarView from "./findCarView";


class CoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findCar: false
    }
  }

  componentWillMount() {
    this.props.getBlocks();
  }

  findCarChange () {
    this.setState({
      findCar: !this.state.findCar
    })
  }

  render() {
    return (
        <div>
          <Row className="buttonBar">
            <Col m={8}>
            </Col>
            <Col m={4}>
              <div className="pending-trans-div">
                <Button animate show onClick={this.findCarChange.bind(this)} className="findCarSwitch">
                  { !this.state.findCar ? ("Find Car"): ("Block Records") }
                </Button>
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
              {
                !this.state.findCar ?
                    (<OdoRecordsView currentBlock={this.props.currentBlock} blocks={this.props.blocks}/>):
                    (<FindCarView/>)

              }
            </Col>
          </Row>
        </div>
  );
  }
}

export default CoreComponent;