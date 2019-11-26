import localBlocks from '../blockList.json'

const initialState = {
  blocks: [],
  currentBlock: null
}

export const reducer =  (state = initialState, action = {}) => {
    console.log(action.payload);
    console.log("++__)");
    console.log("------1123")
    console.log(action.type);
    console.log("------1123")
  switch(action.type) {
    case 'FETCH_ALL_BLOCKS_FULFILLED':
        return {...state, blocks: action.payload.data };
    case 'SET_BLOCK_INFO':
      return Object.assign({}, state, { currentBlock: action.payload.blockIndex});
    case 'CLEAR_CURRENT_BLOCK':
      return Object.assign({}, state, { currentBlock: null});
    default:
      return state;
  }
}
