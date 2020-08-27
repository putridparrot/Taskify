import ActionTypes from "../actionTypes";
import { TaskList } from "../../Dto/TaskList";
import { TaskItem } from "../../Dto/TaskItem";

interface TaskifyState {
  taskLists?: TaskList[];
  systemTaskLists?: TaskList[];
  userTaskLists?: TaskList[];
  selectedTaskList?: TaskList;
}

// Set the task to Completed
const toggleTaskCompleted = (
  tasks?: TaskList[],
  task?: TaskItem
): TaskList[] | undefined => {
  if (task != null) {
    task.isCompleted = !task.isCompleted;
  }

  return tasks != null ? [...tasks] : undefined;
};

// Set the task to Important
const toggleTaskImportant = (
  tasks?: TaskList[],
  task?: TaskItem
): TaskList[] | undefined => {
  if (task != null) {
    task.isImportant = !task.isImportant;
  }

  return tasks != null ? [...tasks] : undefined;
};

const getMyDay = (
  selectedTaskList: TaskList,
  tasksLists?: TaskList[]
): TaskList | undefined => {
  const taskItems = tasksLists?.flatMap((item) => {
    return item.tasks.filter((task) => task.isMyDay === true);
  });

  return { ...selectedTaskList, tasks: taskItems ?? [] };
};

const getImportant = (
  selectedTaskList: TaskList,
  tasksLists?: TaskList[]
): TaskList | undefined => {
  const taskItems = tasksLists?.flatMap((item) => {
    return item.tasks.filter((task) => task.isImportant === true);
  });

  return { ...selectedTaskList, tasks: taskItems ?? [] };
};

const getPlanned = (
  selectedTaskList: TaskList,
  tasksLists?: TaskList[]
): TaskList | undefined => {
  const taskItems = tasksLists?.flatMap((item) => {
    return item.tasks.filter((task) => {
      return task?.schedule?.due || task?.schedule?.reminder;
    });
  });

  return { ...selectedTaskList, tasks: taskItems ?? [] };
};

const getAssignedToYou = (
  selectedTaskList: TaskList,
  _tasksLists?: TaskList[]
): TaskList | undefined => {
  return selectedTaskList;
};

// Get's the selected task items from the task list.
// If it is a system task list then it may be populated
// dynamically, otherwise passes through
const getSelectedTaskList = (
  tasksLists?: TaskList[],
  selectedTaskList?: TaskList
): TaskList => {
  if (selectedTaskList != null) {
    switch (selectedTaskList?.name) {
      case "My Day":
        return getMyDay(selectedTaskList, tasksLists)!;
      case "Important":
        return getImportant(selectedTaskList, tasksLists)!;
      case "Planned":
        return getPlanned(selectedTaskList, tasksLists)!;
      case "Assigned to you":
        return getAssignedToYou(selectedTaskList, tasksLists)!;
      default:
        break;
    }
  }

  return selectedTaskList!;
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
      return {
        ...state,
        selectedTaskList: getSelectedTaskList(state.taskLists, action.payload),
      };
    case ActionTypes.TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        taskLists: toggleTaskCompleted(state.taskLists, action.payload),
      };
    case ActionTypes.TOGGLE_TASK_IMPORTANT:
      return {
        ...state,
        taskLists: toggleTaskImportant(state.taskLists, action.payload),
      };
    default:
      return state;
  }
}
