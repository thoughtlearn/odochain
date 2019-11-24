import React from 'react';
import {Heading, Project, Table, Words} from "arwes";
import "../App.css"

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
          <Heading node='h1' style={{paddingTop:"70px"}}>
            <Words animate show={anim.entered}>
              Select a Block from BlockChain to reveal its Odo Records.
            </Words>
          </Heading>
      );
    } else {
      return (
          <div style={{height:280, overflow: "auto"}}>
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
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Project animate header='OdoMeter Records'>
            {anim => (
                <div style={{height: "300px", align:"center", textAlign:"center"}}>
                  { this.getOdometerRecords(anim) }
                </div>
            )}
          </Project>
        </div>
    );
  }

}

export default OdoRecordsView;