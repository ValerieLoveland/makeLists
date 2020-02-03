import React from "react";
import { useState } from "react";
import "./App.css";
import { makeList } from "./makeList";

export const App: React.FC = () => {
  const [task, setTask] = useState("cats");

  return (
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

      <button onClick={event => makeList(task, setTask)}>Save</button>
    </div>
  );
};

export default App;
