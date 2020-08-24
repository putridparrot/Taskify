import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from 'react-redux';
import IconRetriever from "../Helpers/IconRetriever";
import { TaskListProps } from "./TaskListProps";
import SelectedListStateData from "../redux/types/SelectedListStateData";
import { setSelectedTaskList } from "../redux/actions";

class SystemTaskLists extends React.Component<TaskListProps> {

  handleTaskListSelected(id: number) {
    // eslint-disable-next-line no-shadow
    const { setSelectedTaskList } = this.props;

    console.log(`Clicked ..${id}`);

    if (setSelectedTaskList != null) {
      setSelectedTaskList(new SelectedListStateData(id, true, false));
    }
  }

  render() {
    const { taskLists } = this.props;

    return (
      <List> {
          taskLists?.map((task, _index) => {
            return (
              <ListItem button key={task.name} onClick={() => this.handleTaskListSelected(task.id)}>
                <ListItemIcon>
                  {IconRetriever.map(task.iconName)}
                </ListItemIcon>
                <ListItemText primary={task.name} />
                {/* <ListItemText primary={process.env.REACT_APP_TASK_SERVER_URL}/> */}
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
  taskLists: state.systemTaskListsReducer.systemTaskLists
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemTaskLists);
