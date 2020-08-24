import React, { ReactElement } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import { TaskList } from "../Dto/TaskList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export interface SelectedTaskDetailProps {
  selected?: TaskList;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const classes = useStyles();

  const { selected } = props;

  return (
    <List className={classes.root}>
      {selected?.tasks?.map((task) => {
        return (
          <ListItem key={task.id}>
            <ListItemIcon>
              <Checkbox edge="start" checked tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton>
                <StarBorder />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
