
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducers";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const middlewares = [];

if (process.env.REACT_APP_NODE_ENV !== "production") {
  middlewares.push(logger);
}
// const finalCreateStore = compose(
//     applyMiddleware(promise())
// )(createStore);

export default function configureStore() {
  // return finalCreateStore(reducer);
  return createStore(reducer, applyMiddleware(promise));
}


