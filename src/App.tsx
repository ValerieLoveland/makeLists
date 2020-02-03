import React from "react";
import { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState<string[]>([]);

  function handleClick() {
    const newTaskArray = [...taskArray, task];

    setTaskArray(newTaskArray);
    setTask("");
  }

  return (
    <>
      <div className="App">
        <label>
          Input Task:
          <input
            type="task"
            placeholder="input task"
            onChange={event => setTask(event.currentTarget.value)}
            value={task}
          />
        </label>
        <button onClick={eventClick => handleClick()}>Save</button>
      </div>
      <div>Active Tasks:</div>
      <div>
        {console.log(taskArray)}
        <ul className="App-list">
          {taskArray.map(item => (
            <li className="App-done">
              <input type="checkbox" />

              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
