const UserTaskListsReducerDefaultState = [];

const UserTaskListsReducer = (state= UserTaskListsReducerDefaultState, action) =>{
  switch (action.type) {
    case 'SET_USER_TASK_LISTS':
       state = action.userTaskLists;
       return state;      
    default:
      return state;
  }
}

export {UserTaskListsReducer}




