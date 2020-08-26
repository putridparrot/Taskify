import React, { ReactElement, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  useTheme,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    taskDrawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    taskDrawerClosed: {
      width: 0,
      flexShrink: 0,
    },
    drawerPaperClose: {
      overflowX: "hidden",
      width: 0,
    },
  })
);

export interface TaskOptionsProps {
  open: boolean;
}

export default function TaskOptions(props: TaskOptionsProps): ReactElement {
  const [openTaskDrawer, setOpenTaskDrawer] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    const { open } = props;

    setOpenTaskDrawer(open);
  }, [props]);

  // const handleTaskDrawerToggle = () => {
  //   setOpenTaskDrawer(!openTaskDrawer);
  // };

  const handleTaskDrawerClose = () => {
    setOpenTaskDrawer(false);
  };

  return (
    <Drawer
      className={openTaskDrawer ? classes.taskDrawer : classes.taskDrawerClosed}
      variant="permanent"
      anchor="right"
      open={openTaskDrawer}
      classes={{
        paper: openTaskDrawer ? classes.drawerPaper : classes.drawerPaperClose,
      }}
    >
      <Toolbar />
      <List>
        <ListItem button key="AddToMyDay">
          <ListItemText primary="Add to My Day" />
        </ListItem>
        <Divider />
        <ListItem button key="RemindMe">
          <ListItemText primary="Remind me" />
        </ListItem>
        <ListItem button key="AddDueDate">
          <ListItemText primary="Add due date" />
        </ListItem>
        <ListItem button key="Repeat">
          <ListItemText primary="Repeat" />
        </ListItem>
      </List>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleTaskDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
    </Drawer>
  );
}
