import React, {ReactElement, ReactNode} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ResponsiveDrawer from './ResponsiveDrawer';
import {TaskLists} from "./TaskLists";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface ShellProps {
  children?: ReactNode;
}

export default function Shell(props: ShellProps): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <ResponsiveDrawer title="Taskify">
        <Toolbar/>
        <div className={classes.drawerContainer}>
          <TaskLists isUserGenerated={false}/>
          <Divider/>
          <TaskLists isUserGenerated={true}/>
        </div>
      </ResponsiveDrawer>
      {/*{children}*/}
    </div>
  );
}