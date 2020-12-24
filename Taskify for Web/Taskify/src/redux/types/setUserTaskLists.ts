import { MessageType } from "./MessageType";

// TODO: sort out param type
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const setUserTaskLists = (userTaskLists: any): MessageType => ({
  type: "SET_USER_TASK_LISTS",
  data: userTaskLists,
});

export default setUserTaskLists;
