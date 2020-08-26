import React, { ReactElement, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Typography, Drawer, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import { ITaskServiceAgent } from "../ServiceAgents/ITaskServiceAgent";
import applicationContainer from "../Container";
import { Types } from "../Types";
import SelectedTaskDetail from "./SelectedTaskList";
import {
  setSelectedTaskList,
  toggleTaskCompleted,
  toggleTaskImportant,
  setTaskLists,
} from "../redux/actions";
import TaskGroupsList from "./TaskGroupsList";
import { TaskItem } from "../Dto/TaskItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: "100vh",
      overflow: "auto",
    },
  })
);

function ensureValidColour(colour: string) {
  if (colour == null) {
    return "#ffffff";
  }
  return !colour.startsWith("#") ? `#${colour}` : colour;
}

function Shell(props: any): ReactElement {
  const {
    // eslint-disable-next-line no-shadow
    setSelectedTaskList,
    // eslint-disable-next-line no-shadow
    toggleTaskCompleted,
    // eslint-disable-next-line no-shadow
    toggleTaskImportant,
    // eslint-disable-next-line no-shadow
    setTaskLists,
  } = props;

  useEffect(() => {
    const taskServiceAgent = applicationContainer.get<ITaskServiceAgent>(
      Types.ITaskServiceAgent
    );
    taskServiceAgent?.fetchTaskLists((e, resp) => {
      if (e != null) {
        console.log("Error Occured....");
      } else if (resp != null) {
        if (setTaskLists != null) {
          setTaskLists(resp);
        }

        if (setSelectedTaskList != null) {
          setSelectedTaskList(resp[0]);
        }
      }
    });
  }, [setSelectedTaskList, setTaskLists]);

  const classes = useStyles();

  function onTaskCompleted(task: TaskItem) {
    if (toggleTaskCompleted != null) {
      toggleTaskCompleted(task);
    }
  }

  function onTaskImportant(task: TaskItem) {
    if (toggleTaskImportant != null) {
      toggleTaskImportant(task);
    }
  }

  const { selectedTaskList, taskLists } = props;

  const systemTaskList: any = taskLists?.filter(
    (tl) => !tl.specification.isUserGenerated
  );
  const userTaskList: any = taskLists?.filter(
    (tl) => tl.specification.isUserGenerated
  );

  // TODO: this needs to be supplied by smart list styles
  // #fce4ec nice pale pink for Important
  // #e0f2f1 planned
  // "#e8f5e9" assigned to
  // #9fa8da tasks
  // #ffe0b2 maybe for flagged
  // #b2ebf2 user defined
  // should be stored with task list

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Taskify
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <TaskGroupsList
            userTaskGroups={userTaskList}
            systemTaskGroups={systemTaskList}
            setSelectedTaskGroup={setSelectedTaskList}
            selectedTaskList={selectedTaskList}
          />
        </div>
      </Drawer>
      <main
        className={classes.content}
        style={{
          backgroundColor: ensureValidColour(
            selectedTaskList?.backgroundColour
          ),
        }}
      >
        <Toolbar />
        <SelectedTaskDetail
          backgroundColour={ensureValidColour(
            selectedTaskList?.backgroundColour
          )}
          selected={selectedTaskList}
          completedClicked={onTaskCompleted}
          importantClicked={onTaskImportant}
        />
      </main>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  taskLists: state.taskLists,
  selectedTaskList: state.selectedTaskList,
});

const mapDispatchToProps = {
  setTaskLists,
  setSelectedTaskList,
  toggleTaskImportant,
  toggleTaskCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
