import React from "react";
import { storiesOf } from "@storybook/react";
import { TaskItem } from "../Dto/TaskItem";
import TaskRow from "../Components/TaskRow";

const taskItem: TaskItem = {
  id: "0",
  text: "This is a task item",
};

storiesOf("TaskRow", module).add("Default", () => <TaskRow task={taskItem} />);
