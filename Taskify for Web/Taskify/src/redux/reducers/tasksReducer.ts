import { v4 as uuidv4 } from "uuid";
import ActionTypes from "../actionTypes";
import { TaskList } from "../../Dto/TaskList";
import { TaskItem } from "../../Dto/TaskItem";

const defaultBackground = "#e0e0e0";

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

const addTaskList = (taskLists?: TaskList[], newTaskList?: string) => {
  if (taskLists == null || newTaskList == null) {
    return taskLists;
  }

  taskLists.push({
    id: uuidv4(),
    name: newTaskList,
    iconName: "User",
    specification: {
      isUserGenerated: true,
    },
    backgroundColour: defaultBackground,
    tasks: [],
  });

  return [...taskLists];
};

const deleteTaskList = (
  taskLists?: TaskList[],
  toDeleteTaskList?: TaskList
) => {
  if (taskLists == null || toDeleteTaskList == null) {
    return taskLists;
  }

  const idx = taskLists.indexOf(toDeleteTaskList);
  if (idx >= 0) {
    taskLists.splice(idx, 1);
  }

  return [...taskLists];
};

const renameTaskList = (
  taskLists?: TaskList[],
  toRenameTaskList?: TaskList,
  newName?: string
) => {
  if (taskLists == null || toRenameTaskList == null) {
    return taskLists;
  }

  const idx = taskLists.indexOf(toRenameTaskList);
  if (idx >= 0) {
    taskLists[idx].name = newName!;
  }

  return [...taskLists];
};

const duplicateTaskList = (
  taskLists?: TaskList[],
  toDuplicateTaskList?: TaskList,
  newName?: string
) => {
  if (taskLists == null || toDuplicateTaskList == null) {
    return taskLists;
  }

  taskLists.push({
    id: uuidv4(),
    name: newName!,
    iconName: "User",
    specification: {
      isUserGenerated: true,
    },
    backgroundColour: defaultBackground,
    tasks: toDuplicateTaskList.tasks.map((t) => ({ ...t })),
  });

  return [...taskLists];
};

const addTask = (
  tasks?: TaskList[],
  selected?: TaskList,
  newTask?: TaskItem
): TaskList[] | undefined => {
  if (tasks != null) {
    if (selected != null && newTask != null) {
      if (selected.tasks == null) {
        selected.tasks = [];
      }
      selected.tasks.push({
        ...newTask,
        id: uuidv4(),
      });
    }

    return [...tasks];
  }

  return undefined;
};

const deleteTask = (
  tasks?: TaskList[],
  selected?: TaskList,
  taskToDelete?: TaskItem
): TaskList[] | undefined => {
  if (tasks != null) {
    if (selected != null && taskToDelete != null) {
      const idx = selected.tasks.indexOf(taskToDelete);
      if (idx >= 0) {
        selected.tasks.splice(idx, 1);
      }
    }

    return [...tasks];
  }

  return undefined;
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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        taskLists: addTask(
          state.taskLists,
          action.payload.selected,
          action.payload.task
        ),
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        taskLists: deleteTask(
          state.taskLists,
          action.payload.selected,
          action.payload.task
        ),
      };
    case ActionTypes.ADD_TASKLIST: {
      return {
        ...state,
        taskLists: addTaskList(state.taskLists, action.payload.newTaskList),
      };
    }
    case ActionTypes.DELETE_TASKLIST:
      return {
        ...state,
        taskLists: deleteTaskList(state.taskLists, action.payload.selected),
      };
    case ActionTypes.RENAME_TASKLIST:
      return {
        ...state,
        taskLists: renameTaskList(
          state.taskLists,
          action.payload.selected,
          action.payload.newName
        ),
      };
    case ActionTypes.DUPLICATE_TASKLIST:
      return {
        ...state,
        taskLists: duplicateTaskList(
          state.taskLists,
          action.payload.selected,
          action.payload.newName
        ),
      };
    default:
      return state;
  }
}
