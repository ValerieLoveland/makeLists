import React from "react";
import { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  // const initialTask={
  // checked: false,
  // name: {task},
  // id: {task},
  // value: {task},
  // };

  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const [taskArray, setTaskArray] = useState<string[]>([]);

  function handleClick() {
    const newTaskArray = [...taskArray, task];

    setTaskArray(newTaskArray);
    setTask("");
  }

  function clickspan1() {
    setCompleted(true);
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
        {/* {console.log(taskArray)} */}
        <ul className="App-list">
          {taskArray.map(item => (
            <li
              style={{
                textDecoration: completed ? "line-through" : "none"
              }}
            >
              <span
                //style={{ color: "blue", cursor: "pointer" }}
                onClick={eventClick => clickspan1()}
              >
                <input type="checkbox" />
                {item}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
