import "reflect-metadata";
import {connect} from 'react-redux'
import {TasksProps} from "./TasksProps";
import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconRetriever from "../Helpers/IconRetriever";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

class TaskListTasks extends Component<TasksProps>
{
  render() {
    return 
   /* console.log("Render......");
    return (<List> {
        this.props.taskList.tasks.map((task, _index) => {
          return (<ListItem button key={task.name}>
          <ListItemIcon>
            {IconRetriever.map(task.iconName)}
          </ListItemIcon>
          <ListItemText primary={task.name}/>
          </ListItem>)
        })}
      </List>);
      }*/
  }
}


const mapStateToProps = state => ({
  authToken: state.currentUser && state.currentUser.authToken,
  items: state.items
});

export connect(mapStateToProps)(TaskListTasks);

