import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  MenuItem,
  Divider,
  Menu,
} from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { TaskItem } from "../Dto/TaskItem";

export interface TaskListItemProps {
  onCompletedClicked?: (task: TaskItem) => void;
  onImportantClicked?: (task: TaskItem) => void;
  onDeleteTask?: (task: TaskItem) => void;
  task: TaskItem;
}

export default function (props: TaskListItemProps): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [showMenu, setShowMenu] = React.useState(false);
  const showMenu = true;

  const handleHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHandleClose = () => {
    setAnchorEl(null);
  };

  const { onCompletedClicked, onImportantClicked, onDeleteTask, task } = props;

  function handleCompletedClicked() {
    if (onCompletedClicked != null) {
      onCompletedClicked(task);
    }
  }

  function handleImportantClicked() {
    if (onImportantClicked != null) {
      onImportantClicked(task);
    }
  }

  function handleDeleteTask() {
    if (onDeleteTask != null) {
      onDeleteTask(task);
    }
    handleHandleClose();
  }

  return (
    <ListItem
      button
      // onMouseOver={() => setShowMenu(true)}
      // onMouseOut={() => setShowMenu(false)}
      // onFocus={() => setShowMenu(true)}
      // onBlur={() => setShowMenu(false)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isCompleted}
          tabIndex={-1}
          disableRipple
          onChange={() => handleCompletedClicked()}
        />
      </ListItemIcon>
      <ListItemText primary={task.text} />
      <ListItemSecondaryAction>
        {showMenu && (
          <IconButton onClick={handleHandleClick}>
            <MenuIcon />
          </IconButton>
        )}
        <IconButton onClick={() => handleImportantClicked()}>
          {task.isImportant ? (
            <Star style={{ color: "red" }} />
          ) : (
            <StarBorder />
          )}
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleHandleClose}
        >
          <MenuItem onClick={handleHandleClose}>Add to My Day</MenuItem>
          <MenuItem onClick={handleHandleClose}>Mark as Important</MenuItem>
          <MenuItem onClick={handleHandleClose}>Mark as Completed</MenuItem>
          <Divider />
          <MenuItem onClick={handleHandleClose}>Due today</MenuItem>
          <MenuItem onClick={handleHandleClose}>Due tomorrow</MenuItem>
          <MenuItem onClick={handleHandleClose}>Pick a date</MenuItem>
          <Divider />
          <MenuItem onClick={handleHandleClose}>Move task to...</MenuItem>
          <Divider />
          <MenuItem onClick={handleDeleteTask}>Delete task</MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
