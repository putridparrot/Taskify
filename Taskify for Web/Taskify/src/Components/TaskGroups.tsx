import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Divider } from "@material-ui/core";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskList } from "../Dto/TaskList";

export interface TaskGroupsProps {
  taskLists: TaskList[] | null;
  setSelectedTaskGroup?: (selected: TaskList) => void;
  selectedTaskList?: TaskList;
}

const initialState = {
  mouseX: null,
  mouseY: null,
};

export default function (props: TaskGroupsProps): ReactElement {
  const [state, setState] = React.useState<{
    mouseX: null | number;
    mouseY: null | number;
  }>(initialState);

  function handleTaskListSelected(taskList: TaskList): void {
    const { setSelectedTaskGroup } = props;

    if (setSelectedTaskGroup != null) {
      setSelectedTaskGroup(taskList);
    }
  }

  function handleContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  }

  function handleCloseContextMenu() {
    setState(initialState);
  }

  const { taskLists, selectedTaskList } = props;

  return (
    <div>
      <List>
        {taskLists?.map((task, _index) => {
          return (
            <ListItem
              onContextMenu={handleContextMenu}
              button
              selected={task === selectedTaskList}
              key={task.name}
              onClick={() => handleTaskListSelected(task)}
            >
              <ListItemIcon>{IconRetriever.map(task.iconName)}</ListItemIcon>
              <ListItemText primary={task.name} />
            </ListItem>
          );
        })}
      </List>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleCloseContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem>Rename list</MenuItem>
        <MenuItem>Duplicate list</MenuItem>
        <Divider />
        <MenuItem>Delete list</MenuItem>
      </Menu>
    </div>
  );
}
