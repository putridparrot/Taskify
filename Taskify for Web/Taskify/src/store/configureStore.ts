
import {combineReducers, createStore} from "redux";
import {UserTaskListsReducer} from "../reducers/UserTaskListsReducer";
import {SystemTaskListsReducer} from "../reducers/SystemTaskListsReducer";


const store = createStore(combineReducers(({
  userTaskLists: UserTaskListsReducer,
  systemTaskLists: SystemTaskListsReducer
})));
export {store};

