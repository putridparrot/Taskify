import {ITaskListCallBack} from "./ITaskListCallBack";

export interface ITaskServiceAgent {
  fetchTaskLists(callback: ITaskListCallBack): void;
}