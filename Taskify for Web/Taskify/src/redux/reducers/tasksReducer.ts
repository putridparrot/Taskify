import ActionTypes from "../actionTypes";
import { TaskList } from "../../Dto/TaskList";
import { TaskItem } from "../../Dto/TaskItem";

interface TaskifyState {
  taskLists?: TaskList[];
  systemTaskLists?: TaskList[];
  userTaskLists?: TaskList[];
  selectedTaskList?: TaskList;
}

const setTaskCompleted = (
  tasks?: TaskList[],
  task?: TaskItem
): TaskList[] | undefined => {
  if (task != null) {
    task.isCompleted = true;
  }

  return tasks != null ? [...tasks] : undefined;
};

const setTaskImportant = (
  tasks?: TaskList[],
  task?: TaskItem
): TaskList[] | undefined => {
  if (task != null) {
    task.isImportant = true;
  }

  return tasks != null ? [...tasks] : undefined;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function tasksReducer(
  state: TaskifyState = {},
  action: any
): any {
  switch (action.type) {
    case ActionTypes.SET_TASK_LISTS:
      return { ...state, taskLists: action.payload };
    case ActionTypes.SET_SELECTED_TASK_LIST:
      return { ...state, selectedTaskList: action.payload };
    case ActionTypes.SET_TASK_COMPLETED:
      return {
        ...state,
        taskLists: setTaskCompleted(state.taskLists, action.payload),
      };
    case ActionTypes.SET_TASK_IMPORTANT:
      return {
        ...state,
        taskLists: setTaskImportant(state.taskLists, action.payload),
      };
    default:
      return state;
  }
}
