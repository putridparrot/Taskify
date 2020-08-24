import React, { ReactElement } from "react";
import { Divider } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";
import SelectedListStateData from "../redux/types/SelectedListStateData";
import TaskGroups from "./TaskGroups";

export interface TaskGroupsListProps {
  systemTaskGroups: TaskList[];
  userTaskGroups: TaskList[];
  setSelectedTaskList?: (selected: SelectedListStateData) => void;
}

export default function TaskGroupsList(
  props: TaskGroupsListProps
): ReactElement {
  const { systemTaskGroups, userTaskGroups, setSelectedTaskList } = props;

  return (
    <>
      <TaskGroups
        taskLists={systemTaskGroups}
        setSelectedTaskList={setSelectedTaskList}
      />
      <Divider />
      <TaskGroups
        taskLists={userTaskGroups}
        setSelectedTaskList={setSelectedTaskList}
      />
    </>
  );
}
