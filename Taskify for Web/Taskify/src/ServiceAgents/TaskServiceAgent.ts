import axios from "axios";
import {ITaskListCallBack} from "./ITaskListCallBack";
import {ITaskServiceAgent} from "./ITaskServiceAgent";
import {injectable} from "inversify";
import "reflect-metadata";
import {AppConfig} from "../config/AppConfig";

@injectable()
export class TaskServiceAgent implements ITaskServiceAgent{
  fetchTaskLists(callback: ITaskListCallBack): void {
    axios.get(AppConfig.TASKS_API_URL)
      .then((response) => {
        console.log(response.data);
        callback(null, response.data);
      }).catch((ex) => {
      console.log(ex);
      callback(ex.message, null);
    });
  }
}