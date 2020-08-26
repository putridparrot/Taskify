import React, { ReactElement } from "react";
import { Divider } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";
import TaskGroups from "./TaskGroups";

export interface TaskGroupsListProps {
  systemTaskGroups: TaskList[];
  userTaskGroups: TaskList[];
  selectedTaskList?: TaskList;
  setSelectedTaskGroup?: (selected: TaskList) => void;
}

export default function TaskGroupsList(
  props: TaskGroupsListProps
): ReactElement {
  const {
    systemTaskGroups,
    userTaskGroups,
    setSelectedTaskGroup,
    selectedTaskList,
  } = props;

  return (
    <>
      <TaskGroups
        taskLists={systemTaskGroups}
        setSelectedTaskGroup={setSelectedTaskGroup}
        selectedTaskList={selectedTaskList}
      />
      <Divider />
      <TaskGroups
        taskLists={userTaskGroups}
        setSelectedTaskGroup={setSelectedTaskGroup}
        selectedTaskList={selectedTaskList}
      />
    </>
  );
}
