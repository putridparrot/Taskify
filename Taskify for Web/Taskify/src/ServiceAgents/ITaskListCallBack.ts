import { TaskList } from "../Dto/TaskList";

export default interface ITaskListCallBack {
  (error: string | null, result?: TaskList[] | null): void;
}
