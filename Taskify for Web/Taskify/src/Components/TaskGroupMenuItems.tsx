import React, { ReactElement } from "react";
import { MenuItem, Divider } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";

export default (
  task: TaskList,
  handleHandleClose: () => void
): ReactElement[] => {
  const menuItems = [
    <MenuItem onClick={handleHandleClose}>Print list</MenuItem>,
  ];

  if (task.specification?.isUserGenerated) {
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem onClick={handleHandleClose}>Rename list</MenuItem>
    );
    menuItems.push(
      <MenuItem onClick={handleHandleClose}>Duplicate list</MenuItem>
    );
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem onClick={handleHandleClose}>Delete list</MenuItem>
    );
  }

  return menuItems;
};
