import React, { ReactElement } from "react";
import TaskLists from "./TaskLists";

export default function Container(): ReactElement {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <TaskLists />
        </div>
      </div>
    </div>
  );
}