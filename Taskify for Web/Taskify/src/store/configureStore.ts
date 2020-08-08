
import {combineReducers, createStore} from "redux";
import {UserTaskListsReducer} from "../reducers/UserTaskListsReducer";
import {SystemTaskListsReducer} from "../reducers/SystemTaskListsReducer";
import {SelectedTaskListReducer} from "../reducers/SelectedTaskListReducer";


const store = createStore(combineReducers(({
  userTaskLists: UserTaskListsReducer,
  systemTaskLists: SystemTaskListsReducer,
  selectedTaskList: SelectedTaskListReducer
})));
export {store};

