import React, { useState } from "react";
import "./App.css";
import { makeList } from "./makeList";

export const App: React.FC = () => {
  const [task, setTask] = useState("");
  const thing = "";
  let setThing: any;
  const activeList = makeList(thing, setThing);

  function handleImput(event: any) {
    setTask(event.target.value);
  }

  return (
    <>
      <div className="App">
        <label>
          Input Task:
          <input
            type="task"
            placeholder="input task"
            onChange={event => handleImput(event)}
            value={task}
          />
        </label>

        <button onClick={eventList => makeList(task, setTask)}>Save</button>
      </div>

      <div>Active Tasks:</div>
      <div>
        <ol>
          {activeList.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default App;
