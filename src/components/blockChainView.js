import React from 'react';
import {Project} from "arwes";
import '../App.css'

import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
const _ = require('lodash');

class BlockChainView extends React.Component {
  constructor (props) {
    super(props);
    this.showBlockInfo = this.showBlockInfo.bind(this);
  }
  showBlockInfo (blockIndex) {
    this.props.setBlockInfo(blockIndex);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Comp UPdatedd...")
  }


  render () {
    console.log("-@----@-@-@-@-@-@-!!!");
    console.log(this.props.blocks);
    console.log("&&")
    return (
        <div className="padding20LR">
          <Project header='BlockChain'>
            {anim => (
                <div className="flex-container">
                  {
                    this.props.blocks.map((val, index) =>
                      <div key={index} className="block" onClick={this.showBlockInfo.bind(this, index)}>
                        <div className="gradient blockDimension">
                        </div>
                        <p className="blockChainText"> Block {index + 1} </p>
                      </div>
                    )
                  }
                </div>
            )}
          </Project>
        </div>
    );
  }

}

export default BlockChainView;