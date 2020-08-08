import React from "react";
import {taskEmitter} from "../Events/EventEmitterConfig";
import {TaskItem} from "../Dto/TaskItem";
import {Box, Container} from "@material-ui/core";

export class SelectedTaskDetail extends React.Component
{
  
  task:TaskItem | null = null;
  
  componentDidMount() {    
    taskEmitter.addListener("taskSelected",(task:TaskItem)=>{
      console.log("Setting task " + task);
      this.task = task;      
      this.forceUpdate()
    })
  }

  render() {
    if(this.task != null) {
      console.log("Returnign div ...");
      return <Container>
              <Box component="div" display="inline">
                {this.task.text}
              </Box>
             </Container>
    }    
    return <div></div>
  }
}

