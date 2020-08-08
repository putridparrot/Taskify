const SelectedTaskListReducerDefaultState = {};

const SelectedTaskListReducer = (state= SelectedTaskListReducerDefaultState, action) =>{
  switch (action.type) {
    case 'SET_SELECTED_TASK_LIST':
      state = action.selectedTaskList;
      console.log("Setting state to " + action.selectedTaskList);
      return state;
    default:
      return state;
  }
}

export {SelectedTaskListReducer}
