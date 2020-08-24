import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskList } from "../Dto/TaskList";

export interface TaskGroupsProps {
  taskLists: TaskList[] | null;
  setSelectedTaskGroup?: (selected: TaskList) => void;
}

export default function TaskGroups(props: TaskGroupsProps): ReactElement {
  function handleTaskListSelected(taskList: TaskList): void {
    const { setSelectedTaskGroup } = props;

    if (setSelectedTaskGroup != null) {
      setSelectedTaskGroup(taskList);
    }
  }

  const { taskLists } = props;

  return (
    <List>
      {taskLists?.map((task, _index) => {
        return (
          <ListItem
            button
            key={task.name}
            onClick={() => handleTaskListSelected(task)}
          >
            <ListItemIcon>{IconRetriever.map(task.iconName)}</ListItemIcon>
            <ListItemText primary={task.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
