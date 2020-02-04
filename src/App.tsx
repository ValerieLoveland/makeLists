import React from "react";
import { useState } from "react";
import "./App.css";
import { Item } from "./Item";
import { TaskInput } from "./TaskInput";

export const App: React.FC = () => {
  const [taskArray, setTaskArray] = useState<string[]>([]);

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

        {/* <TaskList tasks={activeTasks} />
        <h3>Done Tasks: </h3>
        <TaskList tasks={doneTasks} /> */}
      </div>
    </>
  );
};

export default App;

function mapStringToItem(name: string) {
  return <Item taskName={name} />;
}
