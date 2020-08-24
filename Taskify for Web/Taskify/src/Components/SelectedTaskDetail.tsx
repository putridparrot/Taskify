import React, { ReactElement } from "react";
import { Box, Container } from "@material-ui/core";
import { taskEmitter } from "../Events/EventEmitterConfig";
import { TaskItem } from "../Dto/TaskItem";

class SelectedTaskDetail extends React.Component {

  task: TaskItem | null = null;

  componentDidMount(): void {
    taskEmitter.addListener("taskSelected", (task: TaskItem) => {
      console.log(`Setting task ${task}`);
      this.task = task;
      this.forceUpdate();
    });
  }

  render(): ReactElement {
    if (this.task != null) {
      console.log("Returnign div ...");
      return (
        <Container>
          <Box component="div" display="inline">
            {this.task.text}
          </Box>
        </Container>
      );
    }
    return <></>;
  }
}

export default SelectedTaskDetail;