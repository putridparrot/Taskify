import { TaskListSpecification } from "./TaskListSpecification";
import { TaskItem } from "./TaskItem";

export interface TaskList {
  id: string;
  name: string;
  tasks: TaskItem[];
  specification: TaskListSpecification;
  iconName: string;
  backgroundColour?: string;
}
