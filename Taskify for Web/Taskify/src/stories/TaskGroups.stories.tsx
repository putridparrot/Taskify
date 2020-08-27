import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TaskGroups from "../Components/TaskGroups";
import { TaskList } from "../Dto/TaskList";

const taskList: TaskList[] = [
  {
    id: "0",
    name: "My Tasks",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "MyDay",
  },
  {
    id: "1",
    name: "Important",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "Important",
  },
  {
    id: "2",
    name: "Planned",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "Planned",
  },
];

storiesOf("TaskGroups", module)
  .add("Without Tasks", () => <TaskGroups taskLists={[]} />)
  .add("With Tasks", () => (
    <TaskGroups
      taskLists={taskList}
      setSelectedTaskGroup={action("Selected")}
    />
  ));
