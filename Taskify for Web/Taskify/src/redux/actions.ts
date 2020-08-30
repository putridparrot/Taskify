import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";
import { TaskList } from "../Dto/TaskList";
import { TaskItem } from "../Dto/TaskItem";

interface ActionReturn<P> {
  type: ActionTypes;
  payload: P;
}

export function setTaskLists(taskLists: TaskList[]): ActionReturn<TaskList[]> {
  return action(ActionTypes.SET_TASK_LISTS, taskLists);
}

export function setSelectedTaskList(
  selectedTaskList: TaskList
): ActionReturn<TaskList> {
  return action(ActionTypes.SET_SELECTED_TASK_LIST, selectedTaskList);
}

export function toggleTaskCompleted(task: TaskItem): ActionReturn<TaskItem> {
  return action(ActionTypes.TOGGLE_TASK_COMPLETED, task);
}

export function toggleTaskImportant(task: TaskItem): ActionReturn<TaskItem> {
  return action(ActionTypes.TOGGLE_TASK_IMPORTANT, task);
}

export function addTask(
  selected: TaskList,
  task: TaskItem
): ActionReturn<{ selected; task }> {
  return action(ActionTypes.ADD_TASK, {
    selected,
    task,
  });
}

export function deleteTask(
  selected: TaskList,
  task: TaskItem
): ActionReturn<{ selected; task }> {
  return action(ActionTypes.DELETE_TASK, {
    selected,
    task,
  });
}

export function addTaskList(
  newTaskList: string
): ActionReturn<{ newTaskList }> {
  return action(ActionTypes.ADD_TASKLIST, {
    newTaskList,
  });
}

export function deleteTaskList(
  selected?: TaskList
): ActionReturn<{ selected }> {
  return action(ActionTypes.DELETE_TASKLIST, {
    selected,
  });
}
