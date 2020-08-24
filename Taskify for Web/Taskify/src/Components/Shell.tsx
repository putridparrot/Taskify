import React, { ReactElement, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import { ITaskServiceAgent } from "../ServiceAgents/ITaskServiceAgent";
import applicationContainer from "../Container";
import { Types } from "../Types";
import ConnectedTasks from "./TaskListTasks";
import SelectedTaskDetail from "./SelectedTaskList";
import {
  setSystemTaskLists,
  setUserTaskLists,
  setSelectedTaskList,
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

// interface ShellProps {
//   children?: ReactNode;
// }

function Shell(props: any): ReactElement {
  const {
    // eslint-disable-next-line no-shadow
    setSystemTaskLists,
    // eslint-disable-next-line no-shadow
    setUserTaskLists,
    // eslint-disable-next-line no-shadow
    setSelectedTaskList,
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
      }
    });
  }, [setSystemTaskLists, setUserTaskLists]);

  const classes = useStyles();

  const { systemTaskList, userTaskList, selectedTaskList } = props;

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.content}>
              Taskify
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <TaskGroupsList
              userTaskGroups={userTaskList}
              systemTaskGroups={systemTaskList}
              setSelectedTaskList={setSelectedTaskList}
            />
          </Grid>
          <Grid item xs={6}>
            <ConnectedTasks />
          </Grid>
          <Grid item>
            <SelectedTaskDetail selected={selectedTaskList} />
          </Grid>
        </Grid>
      </div>
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
  setSelectedTaskList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
