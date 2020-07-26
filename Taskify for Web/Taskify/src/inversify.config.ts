import {Container} from "inversify";
import {ITaskServiceAgent} from "./ServiceAgents/ITaskServiceAgent";
import {Types} from "./Types";
import {TaskServiceAgent} from "./ServiceAgents/TaskServiceAgent";
import "reflect-metadata";

const myContainer = new Container();
myContainer.bind<ITaskServiceAgent>(Types.ITaskServiceAgent).to(TaskServiceAgent);

export {myContainer};