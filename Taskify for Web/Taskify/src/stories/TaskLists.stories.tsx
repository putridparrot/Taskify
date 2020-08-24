import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TaskLists from "../Components/TaskLists";
import { TaskList } from "../Dto/TaskList";

const taskList: TaskList[] = [
  {
    id: 0,
    name: "My Tasks",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "MyDay",
  },
  {
    id: 1,
    name: "Important",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "Important",
  },
  {
    id: 2,
    name: "Planned",
    specification: { isUserGenerated: false },
    tasks: [],
    isSelected: false,
    iconName: "Planned",
  },
];

storiesOf("TaskLists", module)
  .add("Without Tasks", () => <TaskLists taskLists={[]} />)
  .add("With Tasks", () => (
    <TaskLists taskLists={taskList} setSelectedTaskList={action("Selected")} />
  ));
