const actions = {
  getBlocks: () => {
    return {
      type: 'FETCH_ALL_BLOCKS',
      payload: {}
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