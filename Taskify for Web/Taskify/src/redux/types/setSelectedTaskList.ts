import SelectedListStateData from "./SelectedListStateData";
import { MessageType } from "./MessageType";

// eslint-disable-next-line import/prefer-default-export
export const setSelectedTaskList = (
  selectedTaskList: SelectedListStateData
): MessageType => ({
  type: "SET_SELECTED_TASK_LIST",
  data: selectedTaskList,
});
