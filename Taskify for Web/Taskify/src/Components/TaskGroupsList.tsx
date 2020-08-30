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
  onRenameList?: (selected?: TaskList, newName?: string) => void;
  onDuplicateList?: (selected?: TaskList, newName?: string) => void;
}

export default function (props: TaskGroupsListProps): ReactElement {
  const {
    systemTaskGroups,
    userTaskGroups,
    onSetSelectedTaskGroup,
    selectedTaskList,
    onNewList,
    onDeleteList,
    onRenameList,
    onDuplicateList,
  } = props;

  function handleCommand(id: string) {
    switch (id) {
      case "Delete":
        onDeleteList?.(selectedTaskList);
        break;
      case "Duplicate":
        onDuplicateList?.(selectedTaskList, `${selectedTaskList?.name}1`);
        break;
      case "Rename":
        onRenameList?.(selectedTaskList, `${selectedTaskList?.name}1`);
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
