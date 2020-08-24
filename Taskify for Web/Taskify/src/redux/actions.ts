import { action } from 'typesafe-actions';
import { ActionTypes } from "./actionTypes";
import SelectedListStateData from "./types/SelectedListStateData";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setSelectedTaskList(selectedTaskList: SelectedListStateData) {
  return action(ActionTypes.SET_SELECTED_TASK_LIST, selectedTaskList);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setSystemTaskLists(systemTaskLists: any) {
  return action(ActionTypes.SET_SYSTEM_TASK_LISTS, systemTaskLists);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setUserTaskLists(userTaskLists: any) {
  return action(ActionTypes.SET_USER_TASK_LISTS, userTaskLists);
}