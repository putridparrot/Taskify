import React from "react";
import { storiesOf } from "@storybook/react";
import SelectedTaskDetail from "../Components/SelectedTaskList";

storiesOf("Selected", module)
  .add("Without Details", () => <SelectedTaskDetail />)
  .add("With Details", () => <SelectedTaskDetail />);
