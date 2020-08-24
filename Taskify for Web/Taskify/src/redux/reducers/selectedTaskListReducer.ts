import { ActionTypes } from "../actionTypes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function selectedTaskListReducer(state = {}, action: any): any {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_TASK_LIST:
      return { ...state, selectedTaskList: action.payload };
    default:
      return state;
  }
}
