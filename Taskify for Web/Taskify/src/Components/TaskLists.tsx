import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import { TaskListProps } from "./TaskListProps";
import SelectedListStateData from "../redux/types/SelectedListStateData";
import IconRetriever from "../Helpers/IconRetriever";

class TaskLists extends React.Component<TaskListProps> {
  handleTaskListSelected(id: number, isUser: boolean): void {
    // eslint-disable-next-line no-shadow
    const { setSelectedTaskList } = this.props;

    if (setSelectedTaskList != null) {
      setSelectedTaskList(new SelectedListStateData(id, isUser));
    }
  }

  render(): ReactElement {
    const { taskLists } = this.props;

    return (
      <List>
        {taskLists?.map((task, _index) => {
          return (
            <ListItem
              button
              key={task.name}
              onClick={() =>
                this.handleTaskListSelected(
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
}

export default TaskLists;
