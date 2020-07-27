import React, {ReactElement, ReactNode, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ResponsiveDrawer from './ResponsiveDrawer';
import {ITaskServiceAgent} from "../ServiceAgents/ITaskServiceAgent";
import {applicationContainer} from "../Container";
import {Types} from "../Types";
import {store} from "../store/configureStore";
import {setSystemTaskLists} from "../actions/setSystemTaskLists";
import {setUserTaskLists} from "../actions/setUserTaskLists";
import {ConnectedSystemTaskLists} from "./SystemTaskLists";
import {ConnectedUserTaskLists} from "./TaskLists";

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
  useEffect(()=>{
  let taskServiceAgent = applicationContainer.get<ITaskServiceAgent>(Types.ITaskServiceAgent);
  taskServiceAgent?.fetchTaskLists((e,resp)=>{
      if(e!=null){
        console.log("Error Occured....");
      }
      else{
        if(resp!=null) {
          let filteredTaskLists:any = resp.filter(tl => !tl.specification.isUserGenerated);
          let filteredUserTaskLists:any = resp.filter(tl => tl.specification.isUserGenerated);          
          store.dispatch(setSystemTaskLists(filteredTaskLists));
          store.dispatch(setUserTaskLists(filteredUserTaskLists));
          console.log("State is :");
          console.log(store.getState());
        }
      }
    })
  },[]);
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <ResponsiveDrawer title="Taskify">
        <Toolbar/>
        <div className={classes.drawerContainer}>
          <ConnectedSystemTaskLists/>
          <Divider/>
          <ConnectedUserTaskLists />
        </div>
      </ResponsiveDrawer>
      {/*{children}*/}
    </div>
  );
}

