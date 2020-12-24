import { connect } from "react-redux";
import TaskGroupsList from "../Components/TaskGroupsList";
import {
  addTaskList,
  deleteTaskList,
  renameTaskList,
  duplicateTaskList,
} from "../redux/actions";

const mapStateToProps = (state: any) => ({
  selectedTaskList: state.selectedTaskList,
});

const mapDispatchToProps = {
  addTaskList,
  deleteTaskList,
  renameTaskList,
  duplicateTaskList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroupsList);
