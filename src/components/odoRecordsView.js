import React from 'react';
import {Heading, Project, Table, Words} from "arwes";
import Popup from "reactjs-popup";

class OdoRecordsView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      records: [],
      headers: ['ID', 'Timestamp', 'VIN Number', 'Odometer Value (Miles)']
    }
  }
  componentWillReceiveProps() {
      if (this.props.currentBlock !== null) {
        this.updateRecords();
      } else {
        this.setState({records: []})
      }
  }
  updateRecords () {
    this.setState({ records: []});
    let records = [];

    this.props.blocks[this.props.currentBlock].data.forEach(transaction => {
      records.push([transaction.id, transaction.timestamp,
        transaction["vin_number"], transaction["odo_value"]]);
    })
    this.setState({ records });

  }
  getOdometerRecords (anim) {
    if (!this.state.records.length) {
      return (
            <Heading node='h1' className="odoMeterText">
              <Words animate show={anim.entered}>
                {
                  this.props.currentBlock === null ?
                      ("Select a Block from BlockChain to reveal its Odo Records.")
                    : ("No Records Found")
                }

              </Words>
            </Heading>
      );
    } else {
      return (
          <div className="odo-tableParent">
            <Table
                animate show
                headers={this.state.headers}
                dataset={this.state.records}
            />
          </div>
      );
    }
  }

  render () {
    return (
        <div className="padding20LR">
          <Project animate header='OdoMeter Records'>
            {anim => (
                <div className="odoRecordsView">
                  { this.getOdometerRecords(anim) }
                </div>
            )}
          </Project>
        </div>
    );
  }

}

export default OdoRecordsView;