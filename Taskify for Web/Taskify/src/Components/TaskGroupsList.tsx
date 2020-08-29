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
}

export default function (props: TaskGroupsListProps): ReactElement {
  const {
    systemTaskGroups,
    userTaskGroups,
    onSetSelectedTaskGroup,
    selectedTaskList,
  } = props;

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
      />
      <ListItem button>
        <ListItemIcon>
          <AddIcon style={{ color: "gray" }} />
        </ListItemIcon>
        <ListItemText primary="New list" style={{ color: "gray" }} />
      </ListItem>
    </>
  );
}
