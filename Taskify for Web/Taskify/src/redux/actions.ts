import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";
import { TaskList } from "../Dto/TaskList";
import { TaskItem } from "../Dto/TaskItem";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setTaskLists(taskLists: TaskList[]) {
  return action(ActionTypes.SET_TASK_LISTS, taskLists);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setSelectedTaskList(selectedTaskList: TaskList) {
  return action(ActionTypes.SET_SELECTED_TASK_LIST, selectedTaskList);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setTaskCompleted(task: TaskItem) {
  return action(ActionTypes.SET_TASK_COMPLETED, task);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setTaskImportant(task: TaskItem) {
  return action(ActionTypes.SET_TASK_IMPORTANT, task);
}
