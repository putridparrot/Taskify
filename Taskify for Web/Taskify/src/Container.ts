import { Container } from "inversify";
import { ITaskServiceAgent } from "./ServiceAgents/ITaskServiceAgent";
import Types from "./Types";
import TaskServiceAgent from "./ServiceAgents/TaskServiceAgent";
import "reflect-metadata";

const applicationContainer = new Container();
applicationContainer
  .bind<ITaskServiceAgent>(Types.ITaskServiceAgent)
  .to(TaskServiceAgent);

export default applicationContainer;
