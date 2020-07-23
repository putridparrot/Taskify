import React, { ReactNode, useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import ResponsiveDrawer from './ResponsiveDrawer';
import { TaskList } from '../Dto/TaskList';
import {IconRetriever} from "../Helpers/IconRetriever";

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

export default function Shell(props: ShellProps) {
  const [taskLists, setTaskLists] = useState<TaskList[]>([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:52606/api/tasklist")
      .then((response) => {
        console.log(response.data);
        setTaskLists(response.data);
      }).catch((ex) => {
        console.log(ex);
      });
  }, []);  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ResponsiveDrawer title="Taskify">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {taskLists.filter(task => !task.specification.isUserGenerated).map((task, _index) => (
              <ListItem button key={task.name}>
                {
                
                  /* We should map text and icon */}
                <ListItemIcon>
                  { IconRetriever.map(task.iconName)}
                </ListItemIcon>
                <ListItemText primary={task.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {taskLists.filter(task => task.specification.isUserGenerated).map((task, _index) => (
              <ListItem button key={task.name}>
                {/* We should map text and icon */}
                <ListItemIcon>
                  { IconRetriever.map(task.iconName)}
                </ListItemIcon>
                <ListItemText primary={task.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </ResponsiveDrawer>
      {props.children}
   </div>  
  );
}