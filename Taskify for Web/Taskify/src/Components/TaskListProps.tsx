import { TaskList } from "../Dto/TaskList";
import SelectedListStateData from "../redux/types/SelectedListStateData";

export interface TaskListProps {
  taskLists: TaskList[] | null;
  setSelectedTaskList?: (selected: SelectedListStateData) => void;
}
