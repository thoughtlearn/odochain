import React from 'react';
import {Col, Heading, Project, Row, Words} from "arwes";


class BlockView extends React.Component {
  constructor(props) {
    super(props);
  }

  getValue (value) {
    if (!value) return "Genesis Block";
    return value.length > 40 ? value.substring(0,20) + "..." : value;
  }

  frameBlockInfo (field, value) {
    let formattedValue = this.getValue(value);
    return (<Row style={{margin: 0}}>
      <Col m={6} style={{textAlign:"right"}}>
        <Heading node="h3"> {field}: </Heading>
      </Col>
      <Col m={6}>
        <p>
          <Words animate show>
            { formattedValue }
          </Words>
        </p>
      </Col>
    </Row>);
  }

  getBlockInfo (anim) {
    let { currentBlock, blocks } = this.props;
    let blockInfo = blocks[currentBlock];
    let block;
    if (!blockInfo) {
      block = (<Heading node='h1' style={{paddingTop:"70px"}}>
        <Words animate show={anim.entered}>
          Select a Block from BlockChain to reveal its information
        </Words>
      </Heading>);
    } else {
      block = (
        <div>
          <Row>
            <Col m={4}>
               <div style={{}} className="gradient blockInfoDimension">
               </div>
              <Heading node="h3" style={{paddingTop:10}}> Block {currentBlock + 1}</Heading>
            </Col>
            <Col m={8} style={{textAlign:"left"}}>
              {this.frameBlockInfo("Hash", blockInfo.hash)}
              {this.frameBlockInfo("Previous Hash", blockInfo.previous_hash)}
              {this.frameBlockInfo("TimeStamp", blockInfo.timestamp)}
              {this.frameBlockInfo("Number of Records", blockInfo.data.length.toString())}
              {this.frameBlockInfo("Nonce", blockInfo.nonce)}
            </Col>
          </Row>
        </div>
      );
    }
    return block;
  }
  render () {
    // let block;
    // block = getBlockInfo();

    return (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Project animate header='Block Information'>
            {anim => (
                <div style={{height: "300px", align:"center", textAlign:"center"}}>
                  {this.getBlockInfo(anim)}
                </div>
            )}
          </Project>
        </div>
    );
  }

}

export default BlockView;