import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import IconRetriever from "../Helpers/IconRetriever";
import TaskGroupMenuItems from "./TaskGroupMenuItems";
import { TaskList } from "../Dto/TaskList";

export interface TaskGroupsProps {
  taskLists: TaskList[] | null;
  setSelectedTaskGroup?: (selected: TaskList) => void;
  selectedTaskList?: TaskList;
}

export default function (props: TaskGroupsProps): ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleTaskListSelected(taskList: TaskList): void {
    const { setSelectedTaskGroup } = props;

    if (setSelectedTaskGroup != null) {
      setSelectedTaskGroup(taskList);
    }
  }

  const { taskLists, selectedTaskList } = props;

  return (
    <div>
      <List>
        {taskLists?.map((task, _index) => {
          return (
            <ListItem
              button
              selected={task.id === selectedTaskList?.id}
              key={task.name}
              onClick={() => handleTaskListSelected(task)}
            >
              <ListItemIcon>{IconRetriever.map(task.iconName)}</ListItemIcon>
              <ListItemText primary={task.name} />
              <ListItemSecondaryAction>
                {task.id === selectedTaskList?.id && (
                  <IconButton onClick={handleHandleClick}>
                    <MenuIcon />
                  </IconButton>
                )}

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {TaskGroupMenuItems(task, handleClose)}
                </Menu>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
