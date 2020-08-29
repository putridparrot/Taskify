import React, { ReactElement } from "react";
import { Divider } from "@material-ui/core";
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
    </>
  );
}
