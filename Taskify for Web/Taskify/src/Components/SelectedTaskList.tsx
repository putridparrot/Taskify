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
  Typography,
  Box,
} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { StarBorder } from "@material-ui/icons";
import { TaskList } from "../Dto/TaskList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    header: {
      width: "100%",
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
  const hasTasks =
    selected != null && selected.tasks != null && selected.tasks.length > 0;

  return (
    <div>
      <Typography className={classes.header} variant="h5">
        <Box textAlign="left" m={1} justifyContent="center">
          <HomeOutlinedIcon />
          Tasks
        </Box>
      </Typography>
      {hasTasks && (
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
      )}
    </div>
  );
}
