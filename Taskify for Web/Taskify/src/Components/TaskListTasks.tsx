import "reflect-metadata";
import { connect } from "react-redux";
import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Box } from "@material-ui/core";
import taskEmitter from "../Events/EventEmitterConfig";
import { TaskItem } from "../Dto/TaskItem";
import ArrayExtensions from "../Utils/ArrayExtensions";
import { TasksProps } from "./TasksProps";

class TaskListTasks extends React.Component<TasksProps> {
  render(): ReactElement {
    const { taskList } = this.props;

    if (taskList == null) {
      return <List />;
    }
    return (
      <List>
        {" "}
        {taskList?.tasks.map((task, _index) => {
          return (
            <Box borderBottom={1}>
              <ListItem
                button
                key={task.text}
                onClick={() => this.handleTaskSelected(task)}
              >
                {/* <ListItemIcon>
                {IconRetriever.map(task.iconName)}
                </ListItemIcon> */}
                <ListItemText primary={task.text} />
              </ListItem>
            </Box>
          );
        })}
      </List>
    );
  }

  private handleTaskSelected(task: TaskItem) {
    taskEmitter.emit("taskSelected", task);
  }
}

function getTaskList(state: any) {
  const { selectedTaskList } = state;
  if (selectedTaskList != null) {
    if (selectedTaskList.isUser) {
      return ArrayExtensions.firstOrDefault(
        state.userTaskLists,
        (tl) => tl.id === selectedTaskList.id
      );
    }
    if (selectedTaskList.isSystem) {
      return ArrayExtensions.firstOrDefault(
        state.systemTaskLists,
        (tl) => tl.id === selectedTaskList.id
      );
    }
  }
  return null;
}

const mapStateToProps = (state) => ({
  taskList: getTaskList(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListTasks);
