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
  Grid,
  InputBase,
  Paper,
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
      padding: theme.spacing(1, 0, 1),
      backgroundColor: theme.palette.background.default,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: "white",
    },
    iconButton: {
      color: "white",
    },
    divider: {
      height: 28,
      margin: 4,
    },
    footer: {
      position: "fixed",
      bottom: 0,
      backgroundColor: theme.palette.primary.light,
      width: "calc(100% - 285px)",
      marginBottom: "10px",
    },
    inputRoot: {
      color: "inherit",
    },
  })
);

export interface SelectedTaskDetailProps {
  selected?: TaskList;
  completedClicked?: (task: TaskItem) => void;
  importantClicked?: (task: TaskItem) => void;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const classes = useStyles();

  const { selected, completedClicked, importantClicked } = props;

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
    <div>
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
        <List className={classes.root}>
          {selected?.tasks?.map((task) => {
            return (
              <ListItem key={task.id}>
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
            );
          })}
        </List>
      )}
      <Paper component="form" className={classes.footer} elevation={3}>
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
