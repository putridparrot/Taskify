import React from "react";
import TaskLists from "./TaskLists";

export default function Container() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          Tasks go here...
          <TaskLists />
        </div>
      </div>
    </div>
  );
}