
import {combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userTaskListsReducer from "./reducers/userTaskListsReducer";
import systemTaskListsReducer from "./reducers/systemTaskListsReducer";
import selectedTaskListReducer from "./reducers/selectedTaskListReducer";

const store = createStore(
  combineReducers({
    userTaskListsReducer,
    systemTaskListsReducer,
    selectedTaskListReducer
  }),
  composeWithDevTools());

export default store;

