import { TaskStep } from "./TaskStep";
import { TaskItemSchedule } from "./TaskItemSchedule";
import { TaskNote } from "./TaskNote";

export interface TaskItem {
  id: string;
  isImportant?: boolean;
  note?: TaskNote;
  text: string;
  description?: string;
  steps?: TaskStep[];
  schedule?: TaskItemSchedule;
  isCompleted?: boolean;
}
