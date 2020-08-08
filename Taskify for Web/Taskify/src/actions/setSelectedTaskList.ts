import {SelectedListStateData} from "./SelectedListStateData";

export const setSelectedTaskList = (selectedTaskList:SelectedListStateData) =>({
  type : 'SET_SELECTED_TASK_LIST',
  selectedTaskList : selectedTaskList
});
