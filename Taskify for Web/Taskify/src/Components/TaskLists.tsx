import React, {useState, useEffect, ReactElement, ReactNode} from "react";
import axios from "axios";
import {TaskItem, TaskList} from "../Dto/TaskList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconRetriever from "../Helpers/IconRetriever";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

interface TaskListProps {
  isUserGenerated: boolean;
}

interface TaskListState {
  taskLists: TaskList[]
}

export class TaskLists extends React.Component<TaskListProps, TaskListState> {
  constructor(props: TaskListProps) {
    super(props);
    console.log("TaskList-> invoked for Constructor");
    this.state = {
      taskLists: []
    };

  }
  
  shouldComponentUpdate(nextProps: Readonly<TaskListProps>, nextState: Readonly<TaskListState>, nextContext: any): boolean {
    if(this.state.taskLists.length===0 && nextState.taskLists.length===0){
      return false;
    }
    return true;    
  }

  componentDidMount() {
    axios.get("http://localhost:52606/api/tasklist")
      .then((response) => {
        console.log(response.data);
        this.updateTasks(response.data);
      }).catch((ex) => {
      console.log(ex);
    });
  }

  updateTasks(taskLists: TaskList[]): void {
    if (!this.props.isUserGenerated) {
      let filteredTaskLists = taskLists.filter(tl => !tl.specification.isUserGenerated);
      this.setState(() => {
        return {taskLists: filteredTaskLists};
      });
    } else {
      let filteredTaskLists = taskLists.filter(tl => tl.specification.isUserGenerated);
      this.setState(() => {
        return {taskLists: filteredTaskLists};
      });
    }

    console.log("TaskList-> Number of tasks in state:" + this.state.taskLists.length);
  }


  render() {
    console.log("Render......");
    return (<List> {
      this.state.taskLists.map((task, _index) => {
        //console.log("Render for task :" + task.name);
        return (<ListItem button key={task.name}>
          <ListItemIcon>
            {IconRetriever.map(task.iconName)}
          </ListItemIcon>
          <ListItemText primary={task.name}/>
        </ListItem>)
      })}
    </List>);
  }
}

