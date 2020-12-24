import React, { ReactElement } from "react";
import { TaskItem } from "../Dto/TaskItem";

export interface TaskRowProps {
  task: TaskItem;
}

export default function TaskRow(props: TaskRowProps): ReactElement {
  const { task } = props;

  return (
    <div key={task.id}>
      {task.id} {task.text}
    </div>
  );
}
