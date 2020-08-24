import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";
import { TaskList } from "../Dto/TaskList";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setSelectedTaskGroup(selectedTaskList: TaskList) {
  return action(ActionTypes.SET_SELECTED_TASK_GROUP, selectedTaskList);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setSystemTaskLists(systemTaskLists: any) {
  return action(ActionTypes.SET_SYSTEM_TASK_LISTS, systemTaskLists);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setUserTaskLists(userTaskLists: any) {
  return action(ActionTypes.SET_USER_TASK_LISTS, userTaskLists);
}
