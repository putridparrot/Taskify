import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";

export default function TaskLists() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:52606/api/tasklist")
      .then((response) => {
        console.log(response.data);
        setValues(response.data);
      }).catch((ex) => {
        console.log(ex);
      });
  })

  return (
    <div>
      <ul>
        {
          values.map((value: any) => (
            <TaskList listName={value.name} />
            /*  <li key={value.name}>{value.name}</li>*/
          ))
        }
      </ul>
    </div>
  );
}