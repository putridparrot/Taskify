import React, { ReactElement } from "react";
import { Box, Container } from "@material-ui/core";
import { TaskList } from "../Dto/TaskList";

export interface SelectedTaskDetailProps {
  selected?: TaskList;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const { selected } = props;

  return (
    <Container>
      <Box component="div" display="inline">
        {selected?.tasks?.map((task) => {
          return (
            <div key={task.id}>
              {task.id} {task.text}
            </div>
          );
        })}
      </Box>
    </Container>
  );
}
