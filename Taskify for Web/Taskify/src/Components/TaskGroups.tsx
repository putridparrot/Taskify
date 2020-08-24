import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import SelectedListStateData from "../redux/types/SelectedListStateData";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskList } from "../Dto/TaskList";

export interface TaskGroupsProps {
  taskLists: TaskList[] | null;
  setSelectedTaskList?: (selected: SelectedListStateData) => void;
}

export default function TaskGroups(props: TaskGroupsProps): ReactElement {
  function handleTaskListSelected(id: number, isUser: boolean): void {
    const { setSelectedTaskList } = props;

    if (setSelectedTaskList != null) {
      setSelectedTaskList(new SelectedListStateData(id, isUser));
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
            onClick={() =>
              handleTaskListSelected(
                task.id,
                task.specification.isUserGenerated
              )
            }
          >
            <ListItemIcon>{IconRetriever.map(task.iconName)}</ListItemIcon>
            <ListItemText primary={task.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
