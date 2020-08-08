import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconRetriever from "../Helpers/IconRetriever";
import ListItemText from "@material-ui/core/ListItemText";
import {TaskListProps} from "./TaskListProps";
import {connect} from  'react-redux';
import {SelectedListStateData} from "../actions/SelectedListStateData";
import {setSelectedTaskList} from "../actions/setSelectedTaskList";
import {store} from "../store/configureStore";

class SystemTaskLists extends React.Component<TaskListProps> {

  handleTaskListSelected(id: Number){
    console.log("Clicked .." +id);
    let selectedListStateData = new SelectedListStateData(id,true,false);
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

const ConnectedSystemTaskLists = connect((state)=>{
  return{
    taskLists: state.systemTaskLists
  }
})(SystemTaskLists);


export {ConnectedSystemTaskLists}