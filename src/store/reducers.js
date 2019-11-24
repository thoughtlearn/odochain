import localBlocks from '../blockList.json'

const initialState = {
  blocks: [],
  currentBlock: null
}

export const reducer = (state = initialState, action = {}) => {
  // const getBlocks = () => {
  //   return localBlocks;
  // };
  switch(action.type) {
    case 'FETCH_ALL_BLOCKS':
      let blocks = localBlocks;
      return Object.assign({}, state, { blocks });
    case 'SET_BLOCK_INFO':
      return Object.assign({}, state, { currentBlock: action.payload.blockIndex});
    case 'CLEAR_CURRENT_BLOCK':
      return Object.assign({}, state, { currentBlock: null});
    default:
      return state;
  }
}
