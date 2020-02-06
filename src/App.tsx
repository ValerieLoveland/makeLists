import React from "react";
import { useState } from "react";
import "./App.css";
//import { Item } from "./Item";
import { TaskInput } from "./TaskInput";

let taskName = "";
function mapStringToItem(name: string) {
  taskName = name;
  return taskName;
}

export const App: React.FC = () => {
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted(!completed);
  };

  function onSelect(task: string) {
    const newTaskArray = [...taskArray, task];

    setTaskArray(newTaskArray);
  }

  return (
    <>
      <TaskInput onSelect={onSelect} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <h3>Active Tasks: </h3>
        <ul className="App-list">{taskArray.map(mapStringToItem)}</ul>

        <h3>Done Tasks: </h3>
        {/* <TaskList tasks={activeTasks} />
      <TaskList tasks={doneTasks} /> */}
      </div>
      <li
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        <input id={taskName} type="checkbox" onChange={handleChange} />
        <label htmlFor={taskName}>{taskName} </label>
      </li>
    </>
  );
};

export default App;
