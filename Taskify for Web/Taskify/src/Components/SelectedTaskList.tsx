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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { TaskList } from "../Dto/TaskList";
import IconRetriever from "../Helpers/IconRetriever";
import { TaskItem } from "../Dto/TaskItem";
import getContrast from "../Helpers/getContrast";

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

const initialState = {
  mouseX: null,
  mouseY: null,
};

export interface SelectedTaskDetailProps {
  selected?: TaskList;
  backgroundColour?: string;
  completedClicked?: (task: TaskItem) => void;
  importantClicked?: (task: TaskItem) => void;
  addTask?: (selected: TaskList, newTask: TaskItem) => void;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const targetRef: any = useRef(null);
  const [relativeWidth, setRelativeWidth] = useState(0);
  const [state, setState] = React.useState<{
    mouseX: null | number;
    mouseY: null | number;
  }>(initialState);

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

  const footerTextColour = getContrast(footerBackgroundColour);

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

  function onContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  }

  function handleCloseContextMenu() {
    setState(initialState);
  }

  function checkForEnter(event: React.KeyboardEvent<HTMLDivElement>) {
    const { addTask } = props;

    if (event.key === "Enter") {
      // we don't want enter to refresh page so handle it
      event.preventDefault();
      if (selected != null && addTask != null) {
        const target = event.target as any;
        addTask(selected, {
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
              <div key={task.id} onContextMenu={onContextMenu}>
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
          onKeyPress={checkForEnter}
          className={classes.input}
          placeholder="Add a task"
          inputProps={{
            "aria-label": "add a task",
            style: { color: footerTextColour },
          }}
        />
      </Paper>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleCloseContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem>
          {/* <ListItemIcon>
            <Star fontSize="small" />
          </ListItemIcon> */}
          Add to My Day
        </MenuItem>
        <MenuItem>Mark as Important</MenuItem>
        <MenuItem>Mark as Completed</MenuItem>
        <Divider />
        <MenuItem>Due today</MenuItem>
        <MenuItem>Due tomorrow</MenuItem>
        <MenuItem>Pick a date</MenuItem>
        <Divider />
        <MenuItem>Move task to...</MenuItem>
        <Divider />
        <MenuItem>Delete task</MenuItem>
      </Menu>
    </div>
  );
}
