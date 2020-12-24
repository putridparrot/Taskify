import ActionTypes from "../actionTypes";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function userTaskListsReducer(state = {}, action: any): any {
  switch (action.type) {
    case ActionTypes.SET_USER_TASK_LISTS:
      return { ...state, userTaskLists: action.payload };
    default:
      return state;
  }
}
