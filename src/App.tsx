import React from "react";
import { useState } from "react";
import "./App.css";
import { makeList } from "./makeList";

export const App: React.FC = () => {
  const [task, setTask] = useState("");
  // const activeList = makeList(task);

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

        <button onClick={event => makeList(task)}>Save</button>
      </div>

      <div>Active Tasks:</div>
      {/* <div>
        <ol>
          {activeList.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      </div> */}
    </>
  );
};

export default App;
