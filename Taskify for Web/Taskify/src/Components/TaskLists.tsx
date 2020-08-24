import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import "reflect-metadata";
import {connect} from "react-redux";
import {TaskListProps} from "./TaskListProps";
import SelectedListStateData from "../redux/types/SelectedListStateData";
import IconRetriever from "../Helpers/IconRetriever";
import { setSelectedTaskList } from "../redux/actions";

class TaskLists extends React.Component<TaskListProps> {
  
  handleTaskListSelected(id: number) {
    // eslint-disable-next-line no-shadow
    const { setSelectedTaskList } = this.props;

    console.log(`Clicked ..${id}`);

    if (setSelectedTaskList != null) {
      setSelectedTaskList(new SelectedListStateData(id, false, true));
    }
  }
  
  render(): ReactElement {
    const { taskLists } = this.props;
    
    return (
      <List> {
        taskLists?.map((task, _index) => {        
          return (
            <ListItem button key={task.name} onClick={()=>this.handleTaskListSelected(task.id)}>
              <ListItemIcon>
                {IconRetriever.map(task.iconName)}
              </ListItemIcon>
              <ListItemText primary={task.name} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const mapDispatchToProps = {
  setSelectedTaskList
};

const mapStateToProps = (state: any) => ({
  taskLists: state.userTaskListsReducer.userTaskLists
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskLists);
