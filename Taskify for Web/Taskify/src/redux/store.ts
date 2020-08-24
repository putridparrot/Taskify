
import {combineReducers, createStore} from "redux";
import userTaskListsReducer from "./reducers/userTaskListsReducer";
import systemTaskListsReducer from "./reducers/systemTaskListsReducer";
import selectedTaskListReducer from "./reducers/selectedTaskListReducer";


const store = createStore(
  combineReducers(({
    userTaskListsReducer,
    systemTaskListsReducer,
    selectedTaskListReducer
})));

export default store;

