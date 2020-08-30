import React, { ReactElement } from "react";
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TaskList } from "../Dto/TaskList";
import TaskGroups from "./TaskGroups";

export interface TaskGroupsListProps {
  systemTaskGroups: TaskList[];
  userTaskGroups: TaskList[];
  selectedTaskList?: TaskList;
  onSetSelectedTaskGroup?: (selected: TaskList) => void;
  onNewList?: () => void;
  onDeleteList?: (selected?: TaskList) => void;
}

export default function (props: TaskGroupsListProps): ReactElement {
  const {
    systemTaskGroups,
    userTaskGroups,
    onSetSelectedTaskGroup,
    selectedTaskList,
    onNewList,
    onDeleteList,
  } = props;

  function handleCommand(id: string) {
    switch (id) {
      case "Delete":
        onDeleteList?.(selectedTaskList);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <TaskGroups
        taskLists={systemTaskGroups}
        setSelectedTaskGroup={onSetSelectedTaskGroup}
        selectedTaskList={selectedTaskList}
      />
      <Divider />
      <TaskGroups
        taskLists={userTaskGroups}
        setSelectedTaskGroup={onSetSelectedTaskGroup}
        selectedTaskList={selectedTaskList}
        onCommand={handleCommand}
      />
      <ListItem button onClick={onNewList}>
        <ListItemIcon>
          <AddIcon style={{ color: "gray" }} />
        </ListItemIcon>
        <ListItemText primary="New list" style={{ color: "gray" }} />
      </ListItem>
    </>
  );
}
