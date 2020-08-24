import { ActionTypes } from "../actionTypes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function systemTaskListsReducer(state = {}, action: any): any {
  switch (action.type) {
    case ActionTypes.SET_SYSTEM_TASK_LISTS:
      return { ...state, systemTaskLists: action.payload };
    default:
      return state;
  }
}
