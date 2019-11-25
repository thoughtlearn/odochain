import {Button, Col, Heading, Row, Table} from "arwes";
import React, { Component } from "react";
import "../App.css"


class PendingTransactionView extends Component {
  componentDidMount() {
    this.props.clearCurrentBlock();
  }

  render() {
    return (
        <div>
          <Heading> Pending Transactions </Heading>
          <Table
              animate show
              headers={['ID', 'Timestamp', 'VIN Number', 'Odometer Value (Miles)']}
              dataset={[
                [1234, '2019-11-24', '123131', 2000],
                [1235, '2019-11-24', '123331', 4000],
                [1254, '2019-11-24', '123831', 6000],
                [4234, '2019-11-24', '121131', 8000],
                [4234, '2019-11-24', '121131', 8000],
                [4234, '2019-11-24', '121131', 8000],
                [4235, '2019-11-24', '121131', 8000],
                [4234, '2019-11-24', '121131', 8000],
                [5234, '2019-11-24', '121131', 8000],
                [7234, '2019-11-24', '121131', 8000],
                [4234, '2019-11-24', '121131', 8000],
                [4834, '2019-11-24', '121131', 8000],
                [9999, '2019-11-24', '121131', 8000],
              ]}
          />
          <Row>
          <Col m={4}></Col>
          <Col m={4}>
            <div className="miningButtonParent">
                <Button className="miningButton">
                  <Heading className="marginZero">
                    Start Mining
                  </Heading>
                </Button>
            </div>
          </Col>
          <Col m={4}></Col>
          </Row>
        </div>
    );
  }
}

export default PendingTransactionView;