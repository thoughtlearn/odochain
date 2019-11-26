import React from 'react';
import {ThemeProvider, createTheme, Arwes} from 'arwes';
import OdoHeader from "./components/header";
import OdoFooter from "./components/footer";
import CoreComponent from "./components/coreView";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PendingTransactionView from "./components/PendingTransactionView";
import {connect} from "react-redux";
import actions from "./store/actions";

import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getBlocks();
  }

  render() {
    const {blocks, currentBlock} = this.props;
    const {setBlockInfo, clearCurrentBlock, getBlocks} = this.props;
    return (
        <ThemeProvider theme={createTheme()}>

          <Arwes background='./images/background.jpg' pattern='./images/glow.png'>
            <Router>
              <OdoHeader/>
              <Switch>
                <Route exact path="/">
                  <CoreComponent blocks={blocks} setBlockInfo={setBlockInfo} currentBlock={currentBlock} getBlocks={getBlocks}/>
                </Route>
                <Route path="/pending-transactions">
                  <PendingTransactionView clearCurrentBlock={clearCurrentBlock}/>
                </Route>
              </Switch>
            </Router>
            <OdoFooter/>
          </Arwes>
        </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks,
    currentBlock: state.currentBlock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBlocks: () => dispatch(actions.getBlocks()),
    clearCurrentBlock: () => dispatch(actions.clearCurrentBlock()),
    setBlockInfo: (blockIndex) => dispatch(actions.setBlockInfo(blockIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);