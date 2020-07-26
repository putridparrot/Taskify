import React, {useState, useEffect, ReactElement, ReactNode} from "react";
import {TaskList} from "../Dto/TaskList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconRetriever from "../Helpers/IconRetriever";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Types} from "../Types";
import {ITaskServiceAgent} from "../ServiceAgents/ITaskServiceAgent";
import "reflect-metadata";
import {applicationContainer} from "../Container";
interface TaskListProps {
  isUserGenerated: boolean;
}

interface TaskListState {
  taskLists: TaskList[]
}

export class TaskLists extends React.Component<TaskListProps, TaskListState> {
  private readonly taskServiceAgent: ITaskServiceAgent | null;
  constructor( props: TaskListProps) {    
    super(props);
    this.taskServiceAgent = applicationContainer.get<ITaskServiceAgent>(Types.ITaskServiceAgent);
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
    this.taskServiceAgent?.fetchTaskLists((e,resp)=>{
      if(e!=null){
        console.log("Error Occured....");
      }
      else{
        this.updateTasks(resp!);
      }
    })
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
  handleTaskListSelected(listId:number){
    
  }

  render() {
    console.log("Render......");
    return (<List> {
      this.state.taskLists.map((task, _index) => {
        //console.log("Render for task :" + task.name);
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

