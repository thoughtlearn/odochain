import axios from "axios";

const actions = {
  getBlocks: () => {
    const blocks = axios.get('http://localhost:8080/blocks');
    return {
      type: 'FETCH_ALL_BLOCKS',
      payload: blocks
    }
  },
  setBlockInfo: (blockIndex) => {
    return {
      type: 'SET_BLOCK_INFO',
      payload: { blockIndex: blockIndex}
    }
  },
  clearCurrentBlock: () => {
    return {
      type: 'CLEAR_CURRENT_BLOCK',
      payload: {}
    }
  }
};

export default actions;