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
  completedClicked?: (task: TaskItem) => void;
  importantClicked?: (task: TaskItem) => void;
  task: TaskItem;
}

export default function (props: TaskListItemProps): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [showMenu, setShowMenu] = React.useState(false);
  const showMenu = true;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { completedClicked, importantClicked, task } = props;

  function onCompletedClicked() {
    if (completedClicked != null) {
      completedClicked(task);
    }
  }

  function onImportantClicked() {
    if (importantClicked != null) {
      importantClicked(task);
    }
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
          onChange={() => onCompletedClicked()}
        />
      </ListItemIcon>
      <ListItemText primary={task.text} />
      <ListItemSecondaryAction>
        {showMenu && (
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        )}
        <IconButton onClick={() => onImportantClicked()}>
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
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Add to My Day</MenuItem>
          <MenuItem onClick={handleClose}>Mark as Important</MenuItem>
          <MenuItem onClick={handleClose}>Mark as Completed</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Due today</MenuItem>
          <MenuItem onClick={handleClose}>Due tomorrow</MenuItem>
          <MenuItem onClick={handleClose}>Pick a date</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Move task to...</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Delete task</MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
