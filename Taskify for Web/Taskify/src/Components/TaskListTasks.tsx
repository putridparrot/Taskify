import "reflect-metadata";
import {connect} from 'react-redux'
import {TasksProps} from "./TasksProps";
import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {TaskList} from "../Dto/TaskList";
import {ArrayExtensions} from "../Utils/ArrayExtensions";
import {Box, Divider} from "@material-ui/core";
import {taskEmitter} from "../Events/EventEmitterConfig";
import {TaskItem} from "../Dto/TaskItem";
class TaskListTasks extends Component<TasksProps> {
  render() {
    if (this.props.taskList == null) {
      return <List></List>
    } else {
      return <List> {
        this.props.taskList?.tasks.map((task, _index) => {
          return (<Box borderBottom={1}><ListItem button key={task.text} onClick={(event)=>this.handleTaskSelected(task)} >
            {/*<ListItemIcon>
            {IconRetriever.map(task.iconName)}
          </ListItemIcon>*/}
            <ListItemText primary={task.text}/>
          </ListItem>
          </Box>)
        })}
      </List>;
    }

  }

  private handleTaskSelected(task: TaskItem) {
    taskEmitter.emit("taskSelected", task );    
  }
}


const ConnectedTasks = connect((state)=>{
  let selectedTaskList = state.selectedTaskList;
  let data:TaskList | null;
  if(selectedTaskList.isUser){
    data =  ArrayExtensions.firstOrDefault(state.userTaskLists, tl=>tl.id===selectedTaskList.id);
  }else if(selectedTaskList.isSystem){
    data =  ArrayExtensions.firstOrDefault(state.systemTaskLists, tl=>tl.id===selectedTaskList.id);
  }
  return{
    taskList: data!
  }
})(TaskListTasks);

export {ConnectedTasks};


