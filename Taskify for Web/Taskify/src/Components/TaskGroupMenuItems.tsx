import React, { ReactElement } from "react";
import { MenuItem, Divider } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";

export default (
  task: TaskList,
  handleCommand: (id: string) => void
): ReactElement[] => {
  const menuItems = [
    <MenuItem key="print" onClick={() => handleCommand("Print")}>Print list</MenuItem>,
  ];

  if (task.specification?.isUserGenerated) {
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem key="rename" onClick={() => handleCommand("Rename")}>Rename list</MenuItem>
    );
    menuItems.push(
      <MenuItem key="duplicate" onClick={() => handleCommand("Duplicate")}>
        Duplicate list
      </MenuItem>
    );
    menuItems.push(<Divider />);
    menuItems.push(
      <MenuItem key="delete" onClick={() => handleCommand("Delete")}>Delete list</MenuItem>
    );
  }

  return menuItems;
};
