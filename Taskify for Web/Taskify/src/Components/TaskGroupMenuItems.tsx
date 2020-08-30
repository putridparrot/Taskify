import React, { ReactElement } from "react";
import { MenuItem, Divider } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";

export default (
  task: TaskList,
  handleCommand: (id: string) => void
): ReactElement[] => {
  const menuItems = [
    <MenuItem onClick={() => handleCommand("Print")}>Print list</MenuItem>,
  ];

  if (task.specification?.isUserGenerated) {
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem onClick={() => handleCommand("Rename")}>Rename list</MenuItem>
    );
    menuItems.push(
      <MenuItem onClick={() => handleCommand("Duplicate")}>
        Duplicate list
      </MenuItem>
    );
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem onClick={() => handleCommand("Delete")}>Delete list</MenuItem>
    );
  }

  return menuItems;
};
