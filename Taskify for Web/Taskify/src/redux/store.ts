
import { createStore } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import tasksReducer from "./reducers/tasksReducer";

const store = createStore(
  tasksReducer,
  composeWithDevTools());

export default store;

