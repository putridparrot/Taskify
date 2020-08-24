import { ActionTypes } from "../actionTypes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function tasksReducer(state = {}, action: any): any {

  switch (action.type) {
    case ActionTypes.SET_SELECTED_TASK_LIST:
      return { ...state, selectedTaskList: action.payload };
    case ActionTypes.SET_SYSTEM_TASK_LISTS:
      return { ...state, systemTaskLists: action.payload };
    case ActionTypes.SET_USER_TASK_LISTS:
      return { ...state, userTaskLists: action.payload };
    default:
      return state;
  }
}
