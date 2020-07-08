export interface TaskNote {
  id: number;
  note: string;
};

export interface TaskStep {  
};

export interface TaskItemSchedule {  
  id: number;
  due: string; // datetime
  reminder: string; // datetime
};

export interface TaskItem {
  id: string;
  isImportant: boolean;
  note: TaskNote;
  text: string;
  description: string;
  steps: TaskStep[];
  schedule: TaskItemSchedule;
};

export interface TaskListSpecification {
  canDelete: boolean;
  canResume: boolean;
  canShare: boolean;
  canDuplicate: boolean;
  isImportantTaskAllowed: boolean;
  isMyDayTaskAllowed: boolean;
  isUserGenerated: boolean;
}

export interface TaskList {
  id: number;
  name: string;
  tasks: TaskItem[];
  specification: TaskListSpecification;
  isSelected: boolean;
};