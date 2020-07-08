import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";

export default function TaskLists() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // this needs to get tasks for selected task list
    axios.get("http://localhost:52606/api/tasklist")
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      }).catch((ex) => {
        console.log(ex);
      });
  }, [])

  return (
    <div>
      <ul>
        {tasks.length > 0 ?
          tasks.map((task: any) => (
            <TaskList key={task.name} listName={task.name} />
            /*  <li key={value.name}>{value.name}</li>*/
          )) :
          'No Tasks Found'
        }
      </ul>
    </div>
  );
}