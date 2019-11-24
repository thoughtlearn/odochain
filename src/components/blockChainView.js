import React from 'react';
import {Project} from "arwes";
import '../App.css'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


class BlockChainView extends React.Component {
  constructor (props) {
    super(props);
    this.showBlockInfo = this.showBlockInfo.bind(this);
  }
  showBlockInfo (blockIndex) {
    this.props.setBlockInfo(blockIndex);
  }
  render () {
    return (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Project animate show header='BlockChain'>
            {anim => (
                <div className="flex-container">
                  {
                    this.props.blocks.map((val, index) =>
                      <div key={index} className="block" onClick={this.showBlockInfo.bind(this, index)}>
                        <div className="gradient blockDimension">
                        </div>
                        <p style={{textAlign:"center"}}> Block {index + 1} </p>
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