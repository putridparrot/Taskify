import {TaskListSpecification} from "./TaskListSpecification";
import {TaskItem} from "./TaskItem";

export interface TaskList {
  id: number;
  name: string;
  tasks: TaskItem[];
  specification: TaskListSpecification;
  isSelected: boolean;
  iconName: string;  
}