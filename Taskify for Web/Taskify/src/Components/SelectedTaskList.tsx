import React, { ReactElement } from "react";
import { Box, Container } from "@material-ui/core";
import SelectedListStateData from "../redux/types/SelectedListStateData";

export interface SelectedTaskDetailProps {
  selected?: SelectedListStateData;
}

export default function SelectedTaskDetail(
  props: SelectedTaskDetailProps
): ReactElement {
  const { selected } = props;

  return (
    <Container>
      <Box component="div" display="inline">
        Task {selected?.id}
      </Box>
    </Container>
  );
}
