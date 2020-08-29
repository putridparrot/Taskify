import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SelectedTaskDetail from "../Components/SelectedTaskList";
import { TaskList } from "../Dto/TaskList";

const taskList: TaskList = {
  id: "0",
  name: "User1",
  tasks: [],
  isSelected: true,
  iconName: "User",
  specification: { isUserGenerated: true },
};

storiesOf("Selected", module)
  .add("Without Details", () => (
    <SelectedTaskDetail addTask={action(`Add Task`)} />
  ))
  .add("With Details", () => (
    <SelectedTaskDetail selected={taskList} addTask={action(`Add Task`)} />
  ));
