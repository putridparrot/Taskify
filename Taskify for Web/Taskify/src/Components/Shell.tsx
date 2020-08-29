import React, { ReactElement, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Drawer,
  CssBaseline,
  IconButton,
  Hidden,
  useTheme,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
  addTask,
  deleteTask,
} from "../redux/actions";
import TaskGroupsList from "./TaskGroupsList";
import TaskProperties from "./TaskProperties";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      // [theme.breakpoints.up('sm')]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
      // },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
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
    // eslint-disable-next-line no-shadow
    addTask,
    // eslint-disable-next-line no-shadow
    deleteTask,
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

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [displayProperties, setDisplayProperties] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const { selectedTaskList, taskLists } = props;

  const systemTaskList: any = taskLists?.filter(
    (tl) => !tl.specification.isUserGenerated
  );
  const userTaskList: any = taskLists?.filter(
    (tl) => tl.specification.isUserGenerated
  );

  const drawer = (
    <div className={classes.drawerContainer}>
      <TaskGroupsList
        userTaskGroups={userTaskList}
        systemTaskGroups={systemTaskList}
        onSetSelectedTaskGroup={setSelectedTaskList}
        selectedTaskList={selectedTaskList}
      />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Taskify
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="task lists">
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => setMobileOpen(false)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <div className={classes.drawerContainer}>{drawer}</div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Toolbar />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
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
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          onCompletedClicked={(tsk) => toggleTaskCompleted?.(tsk)}
          onImportantClicked={(tsk) => toggleTaskImportant?.(tsk)}
          onDisplayProperties={() => setDisplayProperties(true)}
        />
      </main>
      <TaskProperties
        open={displayProperties}
        onClose={() => setDisplayProperties(false)}
      />
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
  addTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
