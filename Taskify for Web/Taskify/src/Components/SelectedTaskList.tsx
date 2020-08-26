import React, { ReactElement, useState, useLayoutEffect, useRef } from "react";
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
  Grid,
  InputBase,
  Paper,
  Divider,
  darken,
  useTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { StarBorder, Star } from "@material-ui/icons";
import { TaskList } from "../Dto/TaskList";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskItem } from "../Dto/TaskItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    header: {
      width: "100%",
      padding: theme.spacing(1, 0, 3),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: "white",
      verticalAlign: "middle",
    },
    iconButton: {
      left: 0,
      color: "white",
    },
    divider: {
      height: 3,
    },
    footer: {
      position: "fixed",
      bottom: 0,
      marginBottom: "10px",
      textAlign: "left",
    },
    inputRoot: {
      color: "inherit",
    },
  })
);

export interface SelectedTaskDetailProps {
  selected?: TaskList;
  backgroundColour?: string;
  completedClicked?: (task: TaskItem) => void;
  importantClicked?: (task: TaskItem) => void;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const targetRef: any = useRef(null);
  const [relativeWidth, setRelativeWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (targetRef != null && targetRef.current != null) {
        setRelativeWidth(targetRef.current.offsetWidth);
      }
    }

    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const {
    selected,
    completedClicked,
    importantClicked,
    backgroundColour,
  } = props;
  const footerBackgroundColour = darken(
    backgroundColour != null
      ? backgroundColour
      : theme.palette.background.paper,
    0.4
  );

  function onCompletedClicked(task: TaskItem) {
    if (completedClicked != null) {
      completedClicked(task);
    }
  }

  function onImportantClicked(task: TaskItem) {
    if (importantClicked != null) {
      importantClicked(task);
    }
  }

  const hasTasks =
    selected != null && selected.tasks != null && selected.tasks.length > 0;

  return (
    <div ref={targetRef}>
      {selected != null && (
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.header}
        >
          <Grid item>{IconRetriever.map(selected.iconName)}</Grid>
          <Grid item style={{ paddingLeft: "10px" }}>
            <Typography variant="h5">{selected!.name}</Typography>
          </Grid>
        </Grid>
      )}
      {hasTasks && (
        <List className={classes.root} disablePadding>
          {selected?.tasks?.map((task) => {
            return (
              <div key={task.id}>
                <ListItem button>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.isCompleted}
                      tabIndex={-1}
                      disableRipple
                      onChange={() => onCompletedClicked(task)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={task.text} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => onImportantClicked(task)}>
                      {task.isImportant ? (
                        <Star style={{ color: "red" }} />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider
                  className={classes.divider}
                  style={{ backgroundColor: backgroundColour }}
                />
              </div>
            );
          })}
        </List>
      )}
      <Paper
        component="form"
        className={classes.footer}
        elevation={3}
        style={{
          backgroundColor: footerBackgroundColour,
          width: relativeWidth,
        }}
      >
        <IconButton className={classes.iconButton} aria-label="add">
          <AddIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Add a task"
          inputProps={{ "aria-label": "add a task" }}
        />
      </Paper>
    </div>
  );
}
