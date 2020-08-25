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
  setSystemTaskLists,
  setUserTaskLists,
  setSelectedTaskGroup,
} from "../redux/actions";
import TaskGroupsList from "./TaskGroupsList";

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
    },
  })
);

function Shell(props: any): ReactElement {
  const {
    // eslint-disable-next-line no-shadow
    setSystemTaskLists,
    // eslint-disable-next-line no-shadow
    setUserTaskLists,
    // eslint-disable-next-line no-shadow
    setSelectedTaskGroup,
  } = props;

  useEffect(() => {
    const taskServiceAgent = applicationContainer.get<ITaskServiceAgent>(
      Types.ITaskServiceAgent
    );
    taskServiceAgent?.fetchTaskLists((e, resp) => {
      if (e != null) {
        console.log("Error Occured....");
      } else if (resp != null) {
        const filteredTaskLists: any = resp.filter(
          (tl) => !tl.specification.isUserGenerated
        );
        const filteredUserTaskLists: any = resp.filter(
          (tl) => tl.specification.isUserGenerated
        );

        if (setSystemTaskLists != null) {
          setSystemTaskLists(filteredTaskLists);
        }
        if (setUserTaskLists != null) {
          setUserTaskLists(filteredUserTaskLists);
        }
        if (setSelectedTaskGroup != null) {
          setSelectedTaskGroup(filteredTaskLists[0]);
        }
      }
    });
  }, [setSystemTaskLists, setUserTaskLists, setSelectedTaskGroup]);

  const classes = useStyles();

  const { systemTaskList, userTaskList, selectedTaskList } = props;

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
            setSelectedTaskGroup={setSelectedTaskGroup}
          />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <SelectedTaskDetail selected={selectedTaskList} />
      </main>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  systemTaskList: state.systemTaskLists,
  userTaskList: state.userTaskLists,
  selectedTaskList: state.selectedTaskList,
});

const mapDispatchToProps = {
  setSystemTaskLists,
  setUserTaskLists,
  setSelectedTaskGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
