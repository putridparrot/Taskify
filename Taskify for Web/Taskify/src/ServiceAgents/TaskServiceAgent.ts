import axios from "axios";
import {ITaskListCallBack} from "./ITaskListCallBack";
import {ITaskServiceAgent} from "./ITaskServiceAgent";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class TaskServiceAgent implements ITaskServiceAgent{
  fetchTaskLists(callback: ITaskListCallBack): void {
    axios.get("http://localhost:52606/api/tasklist")
      .then((response) => {
        console.log(response.data);
        callback(null, response.data);
      }).catch((ex) => {
      console.log(ex);
      callback(ex.message, null);
    });
  }
}