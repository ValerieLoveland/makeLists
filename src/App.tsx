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
  const [taskArray, setTaskArray] = useState<Task[]>([]); //where to set state

  const handleChange = () => {
    setCompleted(!completed);
  };

  function onSelect(task: string) {
    const newTaskArray = [...taskArray, task];

    setTaskArray(newTaskArray);
  }

  return (
    <>
      {/* the data from the input field */}
      <TaskInput onSelect={onSelect} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        {/* displaying done and active tasks and changing the the active and done tasks as clicked */}
        <TaskList
          title="Active Tasks"
          tasks={getActive(taskArray)}
          onToggle={handleToggle}
        />
        <TaskList
          title="Done Tasks"
          tasks={getDone(taskArray)}
          onToggle={handleToggle}
        />
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

function getActive(tasks: Task[]) {
  //filtering the tasks by if it has a completed flag or not
  return tasks.filter(item => item.completed === false);
}

function getDone(tasks: Task[]) {
  return tasks.filter(item => item.completed === true);
}

function toggleTask(taskArray: Task[], taskId: number) {
  return taskArray.map(task => {
    if (task.id === taskId) {
      //not sure about this what the difference between these two. Is this checking that it is being sent back because it is assigned a new id?
      return new Task({ ...task, completed: !task.completed }); //I would think this is reassigned if task id and taskid aren't the same
    }

    return new Task({ ...task }); //send back the task without it changing the completed flag
  });
}
