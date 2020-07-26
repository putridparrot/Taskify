import {TaskList} from "../Dto/TaskList";

export interface ITaskListCallBack {
    (error: String | null, result?: TaskList[] | null) : void    
}