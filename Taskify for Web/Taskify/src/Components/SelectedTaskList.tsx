import React, { ReactElement, useState, useLayoutEffect, useRef } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  List,
  IconButton,
  Typography,
  Grid,
  InputBase,
  Paper,
  Divider,
  darken,
  useTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TaskList } from "../Dto/TaskList";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskItem } from "../Dto/TaskItem";
import getContrast from "../Helpers/getContrast";
import TaskListItem from "./TaskListItem";

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
      // TODO: this needs to be calculated based upon the icon
      width: "90%",
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
  onCompletedClicked?: (task: TaskItem) => void;
  onImportantClicked?: (task: TaskItem) => void;
  onAddTask?: (selected: TaskList, newTask: TaskItem) => void;
  onDeleteTask?: (selected: TaskList, task: TaskItem) => void;
  onDisplayProperties?: (task: TaskItem) => void;
}

export default function (props: SelectedTaskDetailProps): ReactElement {
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
    onCompletedClicked,
    onImportantClicked,
    onDeleteTask,
    onDisplayProperties,
    backgroundColour,
  } = props;

  const footerBackgroundColour = darken(
    backgroundColour != null
      ? backgroundColour
      : theme.palette.background.paper,
    0.4
  );

  const footerTextColour = getContrast(footerBackgroundColour);

  function checkForEnter(event: React.KeyboardEvent<HTMLDivElement>) {
    const { onAddTask } = props;

    if (event.key === "Enter") {
      // we don't want enter to refresh page so handle it
      event.preventDefault();
      if (selected != null && onAddTask != null) {
        const target = event.target as any;
        onAddTask(selected, {
          id: "new",
          text: target.value,
        });
      }
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
                <TaskListItem
                  task={task}
                  onCompletedClicked={onCompletedClicked}
                  onImportantClicked={onImportantClicked}
                  onDeleteTask={(tsk) => onDeleteTask?.(selected, tsk)}
                  onDisplayProperties={onDisplayProperties}
                />
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
          onKeyPress={checkForEnter}
          className={classes.input}
          placeholder="Add a task"
          inputProps={{
            "aria-label": "add a task",
            style: { color: footerTextColour },
          }}
        />
      </Paper>
    </div>
  );
}
