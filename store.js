import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
// import thunk from "redux-thunk";
import state from "./state";

// const middlewares = [thunk]

const store = createStore(reducers, state);

export default store