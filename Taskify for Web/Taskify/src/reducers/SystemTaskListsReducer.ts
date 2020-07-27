const SystemTaskListsReducerDefaultState = [];

const SystemTaskListsReducer = (state= SystemTaskListsReducerDefaultState, action) =>{
  switch (action.type) {
    case 'SET_SYSTEM_TASK_LISTS':      
      state = action.systemTaskLists;
      return state;
    default:
      return state;
  }
}

export {SystemTaskListsReducer}
