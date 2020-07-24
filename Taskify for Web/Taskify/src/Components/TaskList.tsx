import React, { ReactElement } from "react";

interface TaskListProps {
  listName: string;
}

export default function TaskList(props: TaskListProps): ReactElement {
  const { listName } = props;

  return (
    <div>
      {listName}
    </div>
  );
}