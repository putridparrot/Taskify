import axios from "axios";
import { injectable } from "inversify";
import ITaskListCallBack from "./ITaskListCallBack";
import { ITaskServiceAgent } from "./ITaskServiceAgent";
import "reflect-metadata";
import AppConfig from "../config/AppConfig";

@injectable()
export default class TaskServiceAgent implements ITaskServiceAgent {
  fetchTaskLists(callback: ITaskListCallBack): void {
    axios
      .get(AppConfig.TASKS_API_URL)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((ex) => {
        // eslint-disable-next-line no-console
        console.log(ex);
        callback(ex.message, null);
      });
  }
}
