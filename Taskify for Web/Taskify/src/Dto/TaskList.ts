import { TaskListSpecification } from "./TaskListSpecification";
import { TaskItem } from "./TaskItem";

export interface TaskList {
  id: string;
  name: string;
  tasks: TaskItem[];
  specification: TaskListSpecification;
  isSelected: boolean;
  iconName: string;
  backgroundColour?: string;
}
