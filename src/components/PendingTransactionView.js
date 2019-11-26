import {Button, Col, Heading, Row, Table} from "arwes";
import React, { Component } from "react";
import "../App.css";
import axios from 'axios';


class PendingTransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      pendingRecords: []
    }
    this.getPendingRecords.bind(this);
  }

  componentDidMount() {
    this.props.clearCurrentBlock();
    this.getPendingRecords()
  }

   framePendingRecords (records) {
     return records.map(record => {
        return [
            record.id,
            record.timestamp,
            record["vin_number"],
            record["odo_value"],
        ]
     });
  }

  async getPendingRecords() {
    let response = await axios.get('http://localhost:8080/pending-transactions');
    let records = response.data;
    this.setState({
      records: records
    });
    this.setState({
      pendingRecords: this.framePendingRecords(records)
    });
  }

  async startMining() {
    axios.post("http://localhost:8080/mine-block", {})
        .then(response => {
            this.getPendingRecords();
        }).catch(error => {
            console.log("*******1")
            console.log(error);
            console.log("*******2")
    })
  }

  render() {
    let haveRecords = this.state.records.length;
    return (
        <div className="pending-trans-container">
          <Heading> Pending Transactions </Heading>
          <Table
              animate show
              headers={['ID', 'Timestamp', 'VIN Number', 'Odometer Value (Miles)']}
              dataset={ this.state.pendingRecords }
          />
          { !haveRecords ? (<p className="no-pending"> No Pending Records found.</p>): ''}
          <Row>
          <Col m={4}></Col>
          <Col m={4}>
            <div className="miningButtonParent">
              {
                haveRecords ?
                    (<Button className="miningButton" onClick={this.startMining.bind(this)}>
                    <Heading className="marginZero">
                      Start Mining
                    </Heading>
                  </Button>) : null
              }
            </div>
          </Col>
          <Col m={4}></Col>
          </Row>
        </div>
    );
  }
}

export default PendingTransactionView;