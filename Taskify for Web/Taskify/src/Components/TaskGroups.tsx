import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import IconRetriever from "../Helpers/IconRetriever";
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

  const handleHandleClose = () => {
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
              selected={task === selectedTaskList}
              key={task.name}
              onClick={() => handleTaskListSelected(task)}
            >
              <ListItemIcon>{IconRetriever.map(task.iconName)}</ListItemIcon>
              <ListItemText primary={task.name} />
              <ListItemSecondaryAction>
                {task === selectedTaskList && (
                  <IconButton onClick={handleHandleClick}>
                    <MenuIcon />
                  </IconButton>
                )}

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleHandleClose}
                >
                  <MenuItem onClick={handleHandleClose}>Rename list</MenuItem>
                  <MenuItem onClick={handleHandleClose}>
                    Duplicate list
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleHandleClose}>Delete list</MenuItem>
                </Menu>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
