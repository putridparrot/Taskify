import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconRetriever from "../Helpers/IconRetriever";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import {connect} from 'react-redux'
import {TaskListProps} from "./TaskListProps";
import {setSelectedTaskList} from "../actions/setSelectedTaskList";
import {SelectedListStateData} from "../actions/SelectedListStateData";
import {store} from "../store/configureStore";
import {setSystemTaskLists} from "../actions/setSystemTaskLists";

class TaskLists extends React.Component<TaskListProps> {
 
  constructor( props: TaskListProps) {
    super(props);    
  }
  
  handleTaskListSelected(id: Number){
    console.log("Clicked .." +id);
    let selectedListStateData = new SelectedListStateData(id,false,true);
    store.dispatch(setSelectedTaskList(selectedListStateData));   
  }
  
  render() {
    console.log("Render......");
    return (<List> {
      this.props.taskLists?.map((task, _index) => {        
        return (<ListItem button key={task.name} onClick={(event)=>this.handleTaskListSelected(task.id)}>
          <ListItemIcon>
            {IconRetriever.map(task.iconName)}
          </ListItemIcon>
          <ListItemText primary={task.name}/>
        </ListItem>)
      })}
    </List>);
  }
}
const ConnectedUserTaskLists = connect((state)=>{
  return{
    taskLists: state.userTaskLists
  }
})(TaskLists);

export {ConnectedUserTaskLists}
  