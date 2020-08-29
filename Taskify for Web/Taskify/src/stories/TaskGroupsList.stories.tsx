import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TaskGroups from "../Components/TaskGroups";
import { TaskList } from "../Dto/TaskList";
import TaskGroupsList from "../Components/TaskGroupsList";

const systemTasks: TaskList[] = [
  {
    id: "0",
    name: "My Tasks",
    specification: { isUserGenerated: false },
    tasks: [],
    iconName: "MyDay",
  },
  {
    id: "1",
    name: "Important",
    specification: { isUserGenerated: false },
    tasks: [],
    iconName: "Important",
  },
  {
    id: "2",
    name: "Planned",
    specification: { isUserGenerated: false },
    tasks: [],
    iconName: "Planned",
  },
];

const userTasks: TaskList[] = [
  {
    id: "3",
    name: "User 1",
    specification: { isUserGenerated: false },
    tasks: [],
    iconName: "User",
  },
  {
    id: "4",
    name: "User 2",
    specification: { isUserGenerated: false },
    tasks: [],
    iconName: "User",
  },
];

storiesOf("TaskGroupsList", module)
  .add("Without Tasks", () => <TaskGroups taskLists={[]} />)
  .add("With Tasks", () => (
    <TaskGroupsList
      systemTaskGroups={systemTasks}
      userTaskGroups={userTasks}
      onSetSelectedTaskGroup={action("Selected")}
    />
  ));
