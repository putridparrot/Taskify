import { MessageType } from "./MessageType";

// TODO: Sort out the type for the param
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const setSystemTaskLists = (systemTaskLists: any): MessageType => ({
  type: "SET_SYSTEM_TASK_LISTS",
  data: systemTaskLists,
});

export default setSystemTaskLists;
