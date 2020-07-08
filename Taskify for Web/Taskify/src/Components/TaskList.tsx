import React from "react";

interface TaskListProps
{
    listName: string;
}

export default function TaskList(props: TaskListProps) {
  return (

    <div>
      {props.listName}
    </div>
  );
}