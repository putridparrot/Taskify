import React from "react";
import TaskLists from "./TaskListsComponent";

class ContainerComponent extends React.Component{
     render(){
        return <div className="container">
             <div className="row">
                  <div className="col-sm">
                     <TaskLists/>
                  </div>
                  <div className="col-sm">
                       One of three columns
                  </div>
                  <div className="col-sm">
                       One of three columns
                  </div>
             </div>
        </div>
     }
}

export default ContainerComponent
